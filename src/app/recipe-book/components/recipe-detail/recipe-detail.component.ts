import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../../models';
import { Ingredient, ShoppingListService } from 'src/app/shared';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe?: Recipe;
  paramsSubscription?: Subscription;

  constructor(
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    const recipes = this.recipeService.getRecipes();
    this.recipe = recipes[+id];
    this.paramsSubscription = this.route.params.subscribe(({ id }) => {
      this.recipe = recipes[+id];
    });
  }

  addIngredients(ingredients: Ingredient[]) {
    this.shoppingListService.onAddIngredients(ingredients);
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }
}
