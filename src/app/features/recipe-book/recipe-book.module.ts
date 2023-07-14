import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RecipeDetailComponent,
  RecipeItemComponent,
  RecipeListComponent,
} from './components';
import { RecipeBookComponent } from './recipe-book.component';
import { SharedModule } from 'src/app/shared';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeBookComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [RecipeBookComponent],
  bootstrap: [RecipeBookComponent],
})
export class RecipeBookModule {}
