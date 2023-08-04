import { EventEmitter } from '@angular/core';
import { Recipe } from './models';
import { Ingredient } from '../shared';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe 1',
      'This is simply a test 1',
      'https://img.freepik.com/free-vector/drawn-homemade-bread-recipe_23-2148573671.jpg?w=740&t=st=1689851658~exp=1689852258~hmac=03939b4a7918b1a843fe0c2e849783f9d20d6d1e0200cd0aba9c640876c3cc72',
      [
        new Ingredient('Water', 1.5),
        new Ingredient('Flour', 2),
        new Ingredient('Sugar', 2),
        new Ingredient('Salt', 2),
        new Ingredient('Oil', 0.5),
      ]
    ),
    new Recipe(
      'A Book',
      'Probably some good soup recipe here',
      'https://img.freepik.com/free-vector/recipe-book-concept-illustration_114360-7481.jpg?w=1380&t=st=1690028814~exp=1690029414~hmac=82893270e882992d397da3d98dfbef9cd0820a784068081784d1b97c35498c1e',
      [
        new Ingredient('Onion', 0.5),
        new Ingredient('Tomatoes', 2),
        new Ingredient('Potatoes', 2),
        new Ingredient('Carrot', 1),
        new Ingredient('Pasta', 1),
        new Ingredient('Chicken wings', 5),
      ]
    ),
    new Recipe(
      'Muffins',
      'Homemade chocolate & almonds muffins',
      'https://img.freepik.com/free-vector/drawn-recipes-youtube-thumbnail_23-2148926460.jpg?w=1380&t=st=1690028840~exp=1690029440~hmac=67a8bec9ef50f458d94eadb2d2c1ba49e43fd358c2eba5c60f43ced40a27092a',
      [
        new Ingredient('Chocolate', 1.5),
        new Ingredient('Flour', 2),
        new Ingredient('Sugar', 2),
        new Ingredient('Almonds', 0.5),
      ]
    ),
    new Recipe(
      'A Lady',
      'Woman is frying on a pan',
      'https://img.freepik.com/free-vector/people-cooking-kitchen_23-2148206238.jpg?w=740&t=st=1690028855~exp=1690029455~hmac=29e9cd8d59c0f59f31f9ca48db8dbc944cc02f1575399fd38cd651226abe5d72',
      [
        new Ingredient('Oil', 1.5),
        new Ingredient('Oregano', 1),
        new Ingredient('Beef', 1),
        new Ingredient('Pepper', 0.25),
        new Ingredient('Salt', 1),
      ]
    ),
    new Recipe(
      'Pancakes',
      'There are some fluffy pancakes here',
      'https://img.freepik.com/free-vector/watercolor-recipe-concept_52683-37923.jpg?w=1380&t=st=1690028915~exp=1690029515~hmac=a5dd4d47a68c33a5ab565ad5b7e2c6d1b26e3ec1144e1c3dc18776f6220089c7',
      [
        new Ingredient('Flour', 1.5),
        new Ingredient('Egg', 1),
        new Ingredient('Baking powder', 3.5),
        new Ingredient('Milk', 0.25),
        new Ingredient('Salt', 1),
        new Ingredient('White sugar', 1),
      ]
    ),
  ];
  selectedRecipe = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
    // return [...this.recipes];
  }
}
