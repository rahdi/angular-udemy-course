import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Recipe } from '../../models';
import { Ingredient, Path } from 'src/app/shared';
import { ShoppingListActions } from 'src/app/shopping-list/store';
import * as fromApp from 'src/app/store/app.reducer';
import * as RecipeBookActons from '../../store/recipe-book.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe?: Recipe;
  id?: number;
  path = Path;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params) => +params['id']),
        switchMap((id) => {
          this.id = +id;
          return this.store.select('recipeBook');
        }),
        map((recipesState) =>
          recipesState.recipes.find((_, i) => i === this.id)
        )
      )
      .subscribe((recipe) => {
        this.recipe = recipe;
      });
  }

  addIngredients(ingredients: Ingredient[]) {
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }

  onDeleteRecipe() {
    if (typeof this.id === 'number' && !isNaN(this.id)) {
      this.store.dispatch(new RecipeBookActons.DeleteRecipe(this.id));
      this.router.navigate([Path.Recipes]);
    }
  }
}
