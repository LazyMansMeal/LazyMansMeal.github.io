import { TOGGLE_MODAL } from '../actions';

// initialState
export const modals = {
  addRecipe: {
    show: false,
    info: {}
  },
  errorModal: {
    show: false,
    info: {}
  }
};

export default function modalsReducer(state = modals, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return Object.assign({}, state, {
        [action.modalId]: {
          show: !state[action.modalId].show,
          info: action.info
        }
      })
    // case CLOSE_MODAL:
    //   return Object.assign({}, state, {
    //     [action.modalId]: {
    //       show: false,
    //       info: state[action.modalId].info
    //     }
    //   })
    // case MODAL_BUSY:
    //   return Object.assign({}, state, {
    //     [action.modalId]: {
    //       show: state[action.modalId].show,
    //       info: { ...state[action.modalId].info, isBusy: action.isBusy }
    //     }
    //   })
    default:
      return state;
  }
}
