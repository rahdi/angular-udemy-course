import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { HeaderComponent } from './header';
import { RecipeBookModule } from './recipe-book';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShoppingListModule } from './shopping-list';
import { CoreModule } from './core.module';
import { AuthModule } from './auth';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    ShoppingListModule,
    RecipeBookModule,
    AuthModule,
    AppRoutingModule, // this should be last to enable proper recipes routes. The routing arrays are concatenated in the order given here
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
