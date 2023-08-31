import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe, RecipeService } from '../../recipe-book';
import { map, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as RecipeBookActions from 'src/app/recipe-book/store/recipe-book.actions';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private store: Store<AppState>
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://ng-course-recipe-book-efd6a-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://ng-course-recipe-book-efd6a-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipes) =>
          // preventing from getting undefined ingredients
          recipes.map((recipe) => ({
            ...recipe,
            ingredients: recipe.ingredients || [],
          }))
        ),
        tap((recipes) => {
          // this.recipeService.setRecipes(recipes);
          this.store.dispatch(new RecipeBookActions.SetRecipes(recipes));
        })
      );
  }
}
