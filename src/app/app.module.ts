import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DropdownDirective, ShoppingListService } from './shared';
import { HeaderComponent } from './header';
import {
  NoRecipeSelectedComponent,
  RecipeBookComponent,
  RecipeDetailComponent,
  RecipeEditComponent,
  RecipeItemComponent,
  RecipeListComponent,
} from './recipe-book';
import {
  ShoppingListComponent,
  ShoppingListEditComponent,
} from './shopping-list';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeBookComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    NoRecipeSelectedComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    DropdownDirective,
    NotFoundComponent,
    RecipeEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
