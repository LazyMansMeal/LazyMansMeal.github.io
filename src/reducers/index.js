import userSettingsReducer, { userSettings } from './UserSettings';

import { combineReducers } from 'redux';

export const initialState = {
  userSettings: userSettings,
}


const rootReducer = combineReducers({
  userSettings: userSettingsReducer,
})

export default rootReducer;
