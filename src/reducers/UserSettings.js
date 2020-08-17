import { SETTINGS_CHANGED } from '../actions';

// initialState
export const userSettings = {
  peoplePerMeal: 2
}

export default function userSettingsReducer(state = userSettings, action) {
  switch (action.type) {
    case SETTINGS_CHANGED:
      return action.settings
    default:
      return state;
  }
}
