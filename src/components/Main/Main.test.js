import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Main from './Main';

const store = configureMockStore()({
  edittingItem: {},
  items: []
});

it('should render correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Main />
    </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot(tree);
});
