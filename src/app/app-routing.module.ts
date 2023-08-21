import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  NoRecipeSelectedComponent,
  RecipeBookComponent,
  RecipeDetailComponent,
  RecipeEditComponent,
  RecipesResolverService,
} from './recipe-book';
import { ShoppingListComponent } from './shopping-list';
import { Path } from './shared';
import { NotFoundComponent } from './not-found';
import { AuthComponent } from './auth';

const appRoutes: Routes = [
  {
    path: Path.Empty,
    redirectTo: Path.Recipes,
    pathMatch: 'full',
  },
  {
    path: Path.Recipes,
    component: RecipeBookComponent,
    children: [
      { path: Path.Empty, component: NoRecipeSelectedComponent },
      { path: Path.NewRecipe, component: RecipeEditComponent },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipesResolverService],
      },
      {
        path: `:id/${Path.EditRecipe}`,
        component: RecipeEditComponent,
        resolve: [RecipesResolverService],
      },
    ],
  },
  { path: Path.ShoppingList, component: ShoppingListComponent },
  { path: Path.Auth, component: AuthComponent },
  { path: Path.NotFound, component: NotFoundComponent },
  {
    path: Path.Wildcard,
    redirectTo: Path.NotFound,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
