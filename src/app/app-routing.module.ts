import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  NoRecipeSelectedComponent,
  RecipeBookComponent,
  RecipeDetailComponent,
  RecipeEditComponent,
} from './recipe-book';
import { ShoppingListComponent } from './shopping-list';
import { Path } from './shared';
import { NotFoundComponent } from './not-found';

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
      { path: ':id', component: RecipeDetailComponent },
      { path: `:id/${Path.EditRecipe}`, component: RecipeEditComponent },
    ],
  },
  { path: Path.ShoppingList, component: ShoppingListComponent },
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
