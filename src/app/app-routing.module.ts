import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeBookComponent } from './recipe-book';
import { ShoppingListComponent } from './shopping-list';
import { Path } from './shared';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {
    path: Path.Home,
    redirectTo: Path.Recipes,
    pathMatch: 'full',
  },
  { path: Path.Recipes, component: RecipeBookComponent },
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
