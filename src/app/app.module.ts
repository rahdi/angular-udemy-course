import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {
  AlertComponent,
  DropdownDirective,
  LoadingSpinnerComponent,
  PlaceholderDirective,
  ShoppingListService,
} from './shared';
import { HeaderComponent } from './header';
import { RecipeBookModule, RecipeService } from './recipe-book';
import {
  ShoppingListComponent,
  ShoppingListEditComponent,
} from './shopping-list';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthComponent, AuthInterceptorService } from './auth';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    DropdownDirective,
    PlaceholderDirective,
    NotFoundComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipeBookModule,
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
