import userSettingsReducer, { userSettings } from './UserSettings';
import recipesReducer, { recipes } from './Recipes';

import { combineReducers } from 'redux';

export const initialState = {
  userSettings: userSettings,
  recipes: recipes
}


const rootReducer = combineReducers({
  userSettings: userSettingsReducer,
  recipes: recipesReducer
})

export default rootReducer;
