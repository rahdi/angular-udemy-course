import { Component } from '@angular/core';
import { Recipe } from './models';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
})
export class RecipeBookComponent {
  recipeDetails?: Recipe;

  onOpenRecipe(recipeDetails: Recipe) {
    this.recipeDetails = recipeDetails;
  }
}
