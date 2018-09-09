import reducer, {
  DELETE_ITEM,
  deleteItem
} from './duck';
import { save } from '../../Editor/duck/duck';

it('should create DELETE_ITEM action', () => {
  const id = 1;
  const action = deleteItem(id);

  expect(action).toEqual({
    type: DELETE_ITEM,
    payload: { id }
  });
});

it('should handle DELETE_ITEM action', () => {
  const state = [ 
    { id: 1 },
    { id: 2 }
  ];
  const action = deleteItem(1);

  expect(reducer(state, action)).toEqual([{ id: 2 }]);
});

it('should handle save action', () => {
  const action = save({ width: 1});

  expect(reducer(undefined, action).length).toBe(1);
});
