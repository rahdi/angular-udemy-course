import { Recipe } from '../models';
import * as RecipeBookActions from './recipe-book.actions';

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [],
};

export function recipeReducer(
  state = initialState,
  action: RecipeBookActions.RecipeBookActions
) {
  switch (action.type) {
    case RecipeBookActions.SET_RECIPES:
      return { ...state, recipes: [...action.payload] };
    default:
      return state;
  }
}
