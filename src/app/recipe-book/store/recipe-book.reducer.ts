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
    case RecipeBookActions.ADD_RECIPE:
      return { ...state, recipes: [...state.recipes, action.payload] };
    case RecipeBookActions.UPDATE_RECIPE:
      const updatedRecipe = {
        ...state.recipes[action.payload.index],
        ...action.payload.newRecipe,
      };

      const updatedRecipes = [...state.recipes];
      updatedRecipes[action.payload.index] = updatedRecipe;

      return { ...state, recipes: updatedRecipes };
    case RecipeBookActions.DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
}
