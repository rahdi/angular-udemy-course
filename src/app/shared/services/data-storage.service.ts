import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe, RecipeService } from '../../recipe-book';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

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
    this.http
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
        )
      )
      .subscribe((recipes) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
