import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RecipeDetailComponent,
  RecipeItemComponent,
  RecipeListComponent,
} from './components';
import { RecipeBookComponent } from './recipe-book.component';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeBookComponent,
  ],
  imports: [CommonModule],
  exports: [RecipeBookComponent],
  bootstrap: [RecipeBookComponent],
})
export class RecipeBookModule {}
