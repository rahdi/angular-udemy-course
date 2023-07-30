import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Route } from '../../utils';

@Component({
  selector: 'shared-header',
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
