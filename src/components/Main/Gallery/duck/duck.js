import { SAVE } from '../../Editor/duck/duck'

// action types
export const DELETE_ITEM = 'app/gallery/DELETE_ITEM';

// action creators
export const deleteItem = id => ({
  type: DELETE_ITEM,
  payload: {
    id
  }
});

// reducer
const reducer = (state = [], action) => {
  switch(action.type) {
    case DELETE_ITEM:
      let index;
      state.forEach((item, i) => {
        if (item.id === action.payload.id) {
          index = i;
        }
      });
      return [ ...state.slice(0, index), ...state.slice(index + 1) ];
    case SAVE:
      return [
        ...state,
        {
          id: new Date().getTime(),
          ...action.payload.config
        }
      ];
    default:
      return state;
  }

}

export default reducer;
