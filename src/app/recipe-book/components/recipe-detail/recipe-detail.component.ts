import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models';
import { Ingredient, Path, ShoppingListService } from 'src/app/shared';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe?: Recipe;
  id?: number;
  path = Path;

  constructor(
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.recipe = this.recipeService.getRecipe(+id);
      this.id = +id;
    });
  }

  addIngredients(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  onDeleteRecipe() {
    if (typeof this.id === 'number' && !isNaN(this.id)) {
      this.recipeService.deleteRecipe(this.id);
      this.router.navigate([Path.Recipes]);
    }
  }
}
