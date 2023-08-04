import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared';
import { ShoppingListService } from '../shopping-list.service';

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

    this.shoppingListService.onAddIngredient(
      new Ingredient(nameInput.value, this.amountInput.nativeElement.value)
    );

    nameInput.value = '';
    this.amountInput.nativeElement.value = null;
  }
}
