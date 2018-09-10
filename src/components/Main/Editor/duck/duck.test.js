import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import reducer, {
  UPDATE,
  SAVE,
  update,
  save,
  initialState
} from './duck';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it('should create UPDATE action', () => {
  const config = { backgroundColor: '#ffffff' };
  const action = update(config);

  expect(action).toEqual({
    type: UPDATE,
    payload: { config }
  });
});

it('should create SAVE action', () => {
  const store = mockStore();
  const config = { backgroundColor: '#ffffff' };

  store.dispatch(save(config))
  expect(store.getActions()[0].type).toEqual(SAVE);
});

it('should handle UPDATE action', () => {
  const state = { width: 0 };
  const config = { width: 1 };
  const action = update(config);

  expect(reducer(state, action)).toEqual(config);
});

it('should handle SAVE action', () => {
  const store = mockStore();
  const state = { width: 0 };
  const config = { width: 1 };

  store.dispatch(save(config))
  const action = store.getActions()[0];

  expect(reducer(state, action)).toEqual(initialState);
});
