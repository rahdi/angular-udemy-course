import { Component, Input } from '@angular/core';
import { Recipe } from '../../models';
import { Ingredient, ShoppingListService } from 'src/app/shared';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input() recipe!: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  addIngredients(ingredients: Ingredient[]) {
    this.shoppingListService.onAddIngredients(ingredients);
  }
}
