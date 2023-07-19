import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListEditComponent } from './components';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingListEditComponent],
  imports: [CommonModule],
  exports: [ShoppingListComponent],
  bootstrap: [ShoppingListComponent],
})
export class ShoppingListModule {}
