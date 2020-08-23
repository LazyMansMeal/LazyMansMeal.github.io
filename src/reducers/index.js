import userSettingsReducer, { userSettings } from './UserSettings';
import recipesReducer, { recipes } from './Recipes';
import authReducer, { auth } from './Auth';

import { combineReducers } from 'redux';

export const initialState = {
  userSettings: userSettings,
  recipes: recipes,
  auth: auth
}


const rootReducer = combineReducers({
  userSettings: userSettingsReducer,
  recipes: recipesReducer,
  auth: authReducer
})

export default rootReducer;
