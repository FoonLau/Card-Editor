import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import reducer, {
  DELETE_ITEM,
  deleteItem
} from './duck';
import { save } from '../../Editor/duck/duck';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it('should create DELETE_ITEM action', () => {
  const store = mockStore()
  const id = 1;

  store.dispatch(deleteItem(id))

  expect(store.getActions()[0]).toEqual({
    type: DELETE_ITEM,
    payload: { id }
  });
});

it('should handle DELETE_ITEM action', () => {
  const store = mockStore();
  const state = [ 
    { id: 1 },
    { id: 2 }
  ];

  store.dispatch(deleteItem(1));
  const action = store.getActions()[0];

  expect(reducer(state, action)).toEqual([{ id: 2 }]);
});

it('should handle save action', () => {
  const store = mockStore();

  store.dispatch(save({ width: 1}));
  const action = store.getActions()[0];

  expect(reducer(undefined, action).length).toBe(1);
});
