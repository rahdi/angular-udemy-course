import { Component } from '@angular/core';
import { Route } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pseudoRoute: Route = Route.Home;

  onChangeRoute(newRoute: Route) {
    this.pseudoRoute = newRoute;
    console.log(this.pseudoRoute);
  }

  isRecipes() {
    if (this.pseudoRoute === Route.Recipes) return true;
    return;
  }

  isShoppingList() {
    if (this.pseudoRoute === Route.ShoppingList) return true;
    return;
  }
}
