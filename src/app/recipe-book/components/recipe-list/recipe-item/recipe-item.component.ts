import { Component, Input } from '@angular/core';
import { Recipe } from '../../../models';
import { RecipeService } from '../../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipe!: Recipe;

  constructor(private recipeService: RecipeService) {}

  onOpenRecipe() {
    this.recipeService.selectedRecipe.emit(this.recipe);
  }
}
