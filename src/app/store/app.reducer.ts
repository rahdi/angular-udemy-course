import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';
import * as fromAuth from '../auth/store/auth.reducer';
import * as fromRecipes from '../recipe-book/store/recipe-book.reducer';
import { Action, ActionReducer, ActionReducerMap } from '@ngrx/store';

export interface AppState {
  shoppingList: fromShoppingList.State;
  auth: fromAuth.State;
  recipeBook: fromRecipes.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  shoppingList: fromShoppingList.shoppingListReducer as ActionReducer<
    any,
    Action
  >,
  auth: fromAuth.authReducer as ActionReducer<any, Action>,
  recipeBook: fromRecipes.recipeReducer as ActionReducer<any, Action>,
};
