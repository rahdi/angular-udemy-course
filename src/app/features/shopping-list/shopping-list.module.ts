import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListEditComponent } from './components';
import { ShoppingListComponent } from './shopping-list.component';
import { SharedModule } from 'src/app/shared';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingListEditComponent],
  imports: [CommonModule, SharedModule],
  exports: [ShoppingListComponent],
  bootstrap: [ShoppingListComponent],
})
export class ShoppingListModule {}
