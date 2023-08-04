import { EventEmitter } from '@angular/core';
import { Ingredient } from '..';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    // return [...this.ingredients];
    return this.ingredients.slice();
  }

  onAddIngredients(newIngredients: Ingredient[]) {
    this.ingredients.push(...newIngredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
