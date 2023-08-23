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
import { RecipeBookRoutingModule } from './recipe-book-routing.module';

@NgModule({
  declarations: [
    RecipeBookComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeEditComponent,
    NoRecipeSelectedComponent,
  ],
  imports: [
    RouterModule,
    RecipeBookRoutingModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  // exports: [
  //   RecipeBookComponent,
  //   RecipeDetailComponent,
  //   RecipeItemComponent,
  //   RecipeListComponent,
  //   RecipeEditComponent,
  //   NoRecipeSelectedComponent,
  // ], if all of the components are imported here in separate routing module, they don't have to be exported
})
export class RecipeBookModule {}
