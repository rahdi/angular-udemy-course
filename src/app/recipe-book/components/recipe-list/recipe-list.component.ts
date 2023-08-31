import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../../models';
import { ActivatedRoute, Router } from '@angular/router';
import { Path } from 'src/app/shared';
import { Subscription, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes?: Recipe[];
  private subscription?: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.subscription = this.store
      .select('recipeBook')
      .pipe(map((recipesState) => recipesState.recipes))
      .subscribe((updatedRecipes) => {
        this.recipes = updatedRecipes;
      });
  }

  openNewRecipe() {
    this.router.navigate([Path.NewRecipe], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
