import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DropdownDirective } from './shared';
import { HeaderComponent } from './header';
import {
  RecipeBookComponent,
  RecipeDetailComponent,
  RecipeItemComponent,
  RecipeListComponent,
} from './recipe-book';
import {
  ShoppingListComponent,
  ShoppingListEditComponent,
} from './shopping-list';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeBookComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    DropdownDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
