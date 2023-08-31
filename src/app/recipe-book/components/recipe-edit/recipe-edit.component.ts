import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription, map } from 'rxjs';

import { Recipe } from '../../models';
import { AppState } from 'src/app/store/app.reducer';
import * as RecipeBookActions from '../../store/recipe-book.actions';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  recipe?: Recipe;
  id?: number;
  editMode = false;
  recipeForm?: FormGroup;
  private storeSub?: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.id = +id;
      this.editMode = !!id;
      this.initForm();
    });
  }

  onSubmit() {
    if (!this.recipeForm) return;

    const { value: newRecipe } = this.recipeForm;

    if (this.editMode && typeof this.id === 'number' && !isNaN(this.id)) {
      this.store.dispatch(
        new RecipeBookActions.UpdateRecipe({ index: this.id, newRecipe })
      );
    } else {
      this.store.dispatch(new RecipeBookActions.AddRecipe(newRecipe));
    }

    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm?.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm?.get('ingredients')).removeAt(index);
  }

  ngOnDestroy(): void {
    this.storeSub?.unsubscribe();
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray<
      FormGroup<{
        name: FormControl<string | null>;
        amount: FormControl<number | null>;
      }>
    >([]);

    if (this.editMode && typeof this.id !== 'undefined') {
      this.storeSub = this.store
        .select('recipeBook')
        .pipe(
          map((recipesState) =>
            recipesState.recipes.find((_, i) => i === this.id)
          )
        )
        .subscribe((recipe) => {
          if (!recipe) return;

          const { name, imagePath, description, ingredients } = recipe;

          recipeName = name;
          recipeImagePath = imagePath;
          recipeDescription = description;

          ingredients.map(({ name, amount }) => {
            recipeIngredients.push(
              new FormGroup({
                name: new FormControl(name, Validators.required),
                amount: new FormControl(amount, [
                  Validators.required,
                  Validators.pattern(/^[1-9]+[0-9]*$/),
                ]),
              })
            );
          });
        });
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients,
    });
  }

  get controls() {
    return (<FormArray>this.recipeForm?.get('ingredients')).controls;
  }
}
