import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Path } from '../shared';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: Path.ShoppingList, component: ShoppingListComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class ShoppingListRoutingModule {}
