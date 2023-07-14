import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipeBookModule, ShoppingListModule } from './features';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ShoppingListModule, RecipeBookModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
