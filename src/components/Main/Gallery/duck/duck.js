import localStorageProvider from 'services/localStorageProvider';
import { SAVE } from '../../Editor/duck/duck'

// action types
export const DELETE_ITEM = 'app/gallery/DELETE_ITEM';

// action creators
export const deleteItem = id => {
  return (dispatch) => {
    const savedItems = localStorageProvider.get('app.items') || [];
    localStorageProvider.set('app.items', removeItem(savedItems, id));

    dispatch({
      type: DELETE_ITEM,
      payload: {
        id
      }
    });
  };
};

function removeItem(items, id) {
  let index;
  items.forEach((item, i) => {
    if (item.id === id) {
      index = i;
    }
  });

  return [ ...items.slice(0, index), ...items.slice(index + 1) ];
}

// reducer
const reducer = (state = [], action) => {
  switch(action.type) {
    case DELETE_ITEM:
      return removeItem(state, action.payload.id);
    case SAVE:
      return [
        ...state,
        action.payload.item
      ];
    default:
      return state;
  }

}

export default reducer;
