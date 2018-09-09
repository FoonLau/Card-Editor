import reducer, {
  UPDATE,
  SAVE,
  update,
  save,
  initialState
} from './duck'

it('should create UPDATE action', () => {
  const config = { backgroundColor: '#ffffff' };
  const action = update(config);

  expect(action).toEqual({
    type: UPDATE,
    payload: { config }
  });
});

it('should create SAVE action', () => {
  const config = { backgroundColor: '#ffffff' };
  const action = save(config);

  expect(action).toEqual({
    type: SAVE,
    payload: { config }
  });
});

it('should handle UPDATE action', () => {
  const state = { width: 0 };
  const config = { width: 1 };
  const action = update(config);

  expect(reducer(state, action)).toEqual(config);
});

it('should handle SAVE action', () => {
  const state = { width: 0 };
  const config = { width: 1 };
  const action = save(config);

  expect(reducer(state, action)).toEqual(initialState);
});
