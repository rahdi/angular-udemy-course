import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient, ShoppingListService } from 'src/app/shared';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingItemForm') shoppingItemForm?: NgForm;
  subscription?: Subscription;
  editMode = false;
  editedNumberIndex?: number;
  editedItem?: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (id) => {
        this.editedNumberIndex = id;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(id);
        this.shoppingItemForm?.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    if (!form?.value.name || !form?.value.amount) return;

    const { name, amount } = form.value;

    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.editedNumberIndex!,
        new Ingredient(name, amount)
      );
    } else {
      this.shoppingListService.addIngredients([new Ingredient(name, amount)]);
    }

    form.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
