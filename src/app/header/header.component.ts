import { Component, EventEmitter, Output } from '@angular/core';
import { Route } from '../shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() changeRoute = new EventEmitter<Route>();

  navigateToRecipes() {
    this.changeRoute.emit(Route.Recipes);
  }

  navigateToShoppingList() {
    this.changeRoute.emit(Route.ShoppingList);
  }
}
