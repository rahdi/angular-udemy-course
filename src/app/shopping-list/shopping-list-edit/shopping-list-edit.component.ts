import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient, ShoppingListService } from 'src/app/shared';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
  @ViewChild('amountInput') amountInput?: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddButton(nameInput?: HTMLInputElement) {
    if (!nameInput?.value || !this.amountInput?.nativeElement.value) return;

    this.shoppingListService.onAddIngredients([
      new Ingredient(nameInput.value, this.amountInput.nativeElement.value),
    ]);

    nameInput.value = '';
    this.amountInput.nativeElement.value = null;
  }
}
