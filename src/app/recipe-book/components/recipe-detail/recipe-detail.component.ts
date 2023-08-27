import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models';
import { Ingredient, Path } from 'src/app/shared';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../recipe.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shopping-list/store/shopping-list.reducer';
import { ShoppingListActions } from 'src/app/shopping-list/store';

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
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.recipe = this.recipeService.getRecipe(+id);
      this.id = +id;
    });
  }

  addIngredients(ingredients: Ingredient[]) {
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }

  onDeleteRecipe() {
    if (typeof this.id === 'number' && !isNaN(this.id)) {
      this.recipeService.deleteRecipe(this.id);
      this.router.navigate([Path.Recipes]);
    }
  }
}
