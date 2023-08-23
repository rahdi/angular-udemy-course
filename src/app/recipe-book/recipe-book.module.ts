import { NgModule } from '@angular/core';
import { RecipeBookComponent } from './recipe-book.component';
import {
  NoRecipeSelectedComponent,
  RecipeDetailComponent,
  RecipeEditComponent,
  RecipeItemComponent,
  RecipeListComponent,
} from './components';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RecipeBookComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeEditComponent,
    NoRecipeSelectedComponent,
  ],
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  exports: [
    RecipeBookComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeEditComponent,
    NoRecipeSelectedComponent,
  ],
})
export class RecipeBookModule {}
