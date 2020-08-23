import ServiceClient from '../api/ServiceClient';

export const RECIPES_REQUEST = 'RECIPES_REQUEST';
function recipesRequest() {
  return {
    type: RECIPES_REQUEST
  }
}
export const RECIPES_RESULT = 'RECIPES_RESULT';
function recipesResult(recipes) {
  return {
    type: RECIPES_RESULT,
    recipes
  }
}
export function fetchRecipes() {
  return async (dispatch, getState) => {
    const { accessToken, refreshToken } = getState().auth;
    const serviceClient = new ServiceClient({accessToken, refreshToken});
    dispatch(recipesRequest());
    const recipes = await serviceClient.getRecipes();
    dispatch(recipesResult(recipes));
  }
}
export const RECIPE_ADDED = 'RECIPE_ADDED';
export function addRecipe(recipe) {
  return {
    type: RECIPE_ADDED,
    recipe
  }
}
