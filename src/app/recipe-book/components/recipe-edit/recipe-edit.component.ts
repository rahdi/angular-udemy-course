import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../models';
import { RecipeService } from '../../recipe.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Path } from 'src/app/shared';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  recipe?: Recipe;
  id?: number;
  editMode = false;
  recipeForm?: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.recipe = this.recipeService.getRecipe(+id);
      this.id = +id;
      this.editMode = !!id;
      this.initForm();
    });
  }

  onSubmit() {
    if (!this.recipeForm) return;

    const { value: newRecipe } = this.recipeForm;

    if (this.editMode && typeof this.id === 'number' && !isNaN(this.id)) {
      this.recipeService.updateRecipe(this.id, newRecipe);
    } else {
      this.recipeService.addRecipe(newRecipe);
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
      const { name, imagePath, description, ingredients } =
        this.recipeService.getRecipe(this.id);

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
