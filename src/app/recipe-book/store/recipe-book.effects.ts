import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import * as RecipeBookActions from './recipe-book.actions';
import { Recipe } from '../models';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

@Injectable()
export class RecipeBookEffects {
  fetchRecipes = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeBookActions.FETCH_RECIPES),
      switchMap(() => {
        return this.http.get<Recipe[]>(
          'https://ng-course-recipe-book-efd6a-default-rtdb.firebaseio.com/recipes.json'
        );
      }),
      map((recipes) =>
        // preventing from getting undefined ingredients
        recipes.map((recipe) => ({
          ...recipe,
          ingredients: recipe.ingredients || [],
        }))
      ),
      map((recipes) => new RecipeBookActions.SetRecipes(recipes))
    )
  );

  storeRecipes = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RecipeBookActions.STORE_RECIPES),
        withLatestFrom(this.store.select('recipeBook')),
        switchMap(([actionData, recipesState]) =>
          this.http.put(
            'https://ng-course-recipe-book-efd6a-default-rtdb.firebaseio.com/recipes.json',
            recipesState.recipes
          )
        )
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<AppState>
  ) {}
}
