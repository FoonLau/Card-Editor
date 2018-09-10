import localStorageProvider from 'services/localStorageProvider';

// action types
export const UPDATE = 'app/editor/UPDATE';
export const SAVE = 'app/editor/SAVE';

// action creators
export const update = (config) => ({
  type: UPDATE,
  payload: {
    config
  }
});
export const save = (config) => {
  const savedItems = localStorageProvider.get('app.items') || [];
  const item = {
    id: new Date().getTime(),
    ...config
  };
  localStorageProvider.set('app.items', savedItems.concat(item));
  
  return (dispatch) => {
    dispatch({
      type: SAVE,
      payload: {
        item
      }
    });
  };
};

export const initialState = {
  backgroundColor: '#ffffff',
  width: 0,
  height: 0,
  borderRadius: 0
};

// reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE:
      return { ...state, ...action.payload.config };
    case SAVE:
      return initialState;
    default:
      return state;
  }
}

export default reducer;
