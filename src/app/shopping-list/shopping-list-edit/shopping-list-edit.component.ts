import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient, ShoppingListService } from 'src/app/shared';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
  constructor(private shoppingListService: ShoppingListService) {}

  onAddItem(form: NgForm) {
    if (!form?.value.name || !form?.value.amount) return;

    const { name, amount } = form.value;
    this.shoppingListService.onAddIngredients([new Ingredient(name, amount)]);

    form.reset();
  }
}
