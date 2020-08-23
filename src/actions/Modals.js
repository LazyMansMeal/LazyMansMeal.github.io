
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export function toggleModal(modalId, info = {}) {
  return {
    type: TOGGLE_MODAL,
    modalId,
    info
  }
}
