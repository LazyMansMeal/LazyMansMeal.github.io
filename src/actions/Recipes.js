function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const RECIPES_REQUEST = 'RECIPES_REQUEST';
export function recipesRequest() {
  return {
    type: RECIPES_REQUEST
  }
}
export const RECIPES_RESULT = 'RECIPES_RESULT';
export function recipesResult(recipes) {
  return {
    type: RECIPES_RESULT,
    recipes
  }
}
export function fetchRecipes() {
  return async (dispatch, getState) => {
    await sleep(2000);
    const recipes = require('../assets/recipes.test.json');
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
