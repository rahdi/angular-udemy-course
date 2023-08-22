import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe, RecipeService } from '../../recipe-book';
import { exhaustMap, map, take, tap } from 'rxjs';
import { AuthService } from '../../auth';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
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
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        return this.http.get<Recipe[]>(
          'https://ng-course-recipe-book-efd6a-default-rtdb.firebaseio.com/recipes.json',
          {
            params: new HttpParams().set('auth', user?.token || ''),
          }
        );
      }),
      map((recipes) =>
        // preventing from getting undefined ingredients
        recipes.map((recipe) => ({
          ...recipe,
          ingredients: recipe.ingredients || [],
        }))
      ),
      tap((recipes) => {
        this.recipeService.setRecipes(recipes);
      })
    );
  }
}
