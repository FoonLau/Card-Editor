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
export const save = () => ({
  type: SAVE
});

const initialState = {
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
