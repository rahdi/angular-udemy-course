import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
  @ViewChild('amountInput') amountInput?: ElementRef;
  @Output() ingredientEmitter = new EventEmitter<Ingredient>();

  onAddButton(nameInput?: HTMLInputElement) {
    if (!nameInput?.value || !this.amountInput?.nativeElement.value) return;

    this.ingredientEmitter.emit(
      new Ingredient(nameInput.value, this.amountInput.nativeElement.value)
    );

    nameInput.value = '';
    this.amountInput.nativeElement.value = null;
  }
}
