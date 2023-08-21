import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {
  DropdownDirective,
  LoadingSpinnerComponent,
  ShoppingListService,
} from './shared';
import { HeaderComponent } from './header';
import {
  NoRecipeSelectedComponent,
  RecipeBookComponent,
  RecipeDetailComponent,
  RecipeEditComponent,
  RecipeItemComponent,
  RecipeListComponent,
  RecipeService,
} from './recipe-book';
import {
  ShoppingListComponent,
  ShoppingListEditComponent,
} from './shopping-list';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthComponent } from './auth';

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
    AuthComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
