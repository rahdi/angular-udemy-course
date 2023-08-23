import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list-edit';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingListEditComponent],
  imports: [RouterModule, ShoppingListRoutingModule, FormsModule, SharedModule],
})
export class ShoppingListModule {}
