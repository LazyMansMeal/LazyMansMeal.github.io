import { RECIPES_REQUEST, RECIPES_RESULT, RECIPE_ADDED } from '../actions';

// initialState
export const recipes = {
  isFetching: false,
  data: []
}

export default function recipesReducer(state = recipes, action) {
  switch (action.type) {
    case RECIPES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECIPES_RESULT:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.recipes
      })
    case RECIPE_ADDED:
      return Object.assign({}, state, {
        data: [...state.data, action.recipe]
      })
    default:
      return state;
  }
}
