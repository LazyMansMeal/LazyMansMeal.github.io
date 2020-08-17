export const SETTINGS_CHANGED = 'SETTINGS_CHANGED';
export function changeSettings(settings) {
  return {
    type: SETTINGS_CHANGED,
    settings
  }
}
