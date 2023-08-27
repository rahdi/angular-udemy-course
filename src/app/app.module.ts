import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Action, ActionReducer, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { HeaderComponent } from './header';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoreModule } from './core.module';
import { ShoppingListReducer } from './shopping-list/store';
// import { LoggingService } from './logging.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    AppRoutingModule, // this should be last to enable proper recipes routes. The routing arrays are concatenated in the order given here
    StoreModule.forRoot({
      shoppingList: ShoppingListReducer as ActionReducer<unknown, Action>,
    }),
  ],
  // providers: [LoggingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
