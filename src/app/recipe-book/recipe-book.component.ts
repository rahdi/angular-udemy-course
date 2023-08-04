import { Component } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './models';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: [RecipeService],
})
export class RecipeBookComponent {
  recipeSelected?: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe(
      (recipe) => (this.recipeSelected = recipe)
    );
  }
}
