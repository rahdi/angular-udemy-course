import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Path } from '../shared';
import { RecipeBookComponent } from './recipe-book.component';
import {
  NoRecipeSelectedComponent,
  RecipeDetailComponent,
  RecipeEditComponent,
} from './components';
import { RecipesResolverService } from './recipes-resolver.service';
import { AuthGuard } from '../auth/auth.guard'; // importing from folder creates error (possible circular dependency :F)

const routes: Routes = [
  {
    path: Path.Recipes,
    component: RecipeBookComponent,
    canActivate: [AuthGuard],
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeBookRoutingModule {}
