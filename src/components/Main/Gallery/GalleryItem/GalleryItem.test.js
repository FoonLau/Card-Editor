import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Item from 'components/Item/Item';
import GalleryItem from './GalleryItem';
import { DELETE_ITEM } from '../duck/duck';

let store;
beforeEach(() => {
  store = configureMockStore([ thunk ])({
    items: [ { id: 1 } ]
  });
});

it('should render correctly', () => {
  const wrapper = mount(
    <Provider store={store}>
      <GalleryItem />
    </Provider>
  );

  expect(wrapper.contains(Item)).toBe(true);
  expect(wrapper.find('button')).toHaveLength(1);
});

it('should dispatch deleteItem action when click the button', () => {
  const wrapper = mount(
    <Provider store={store}>
      <GalleryItem id={1} />
    </Provider>
  );
  const button = wrapper.find('button');

  button.simulate('click');
  const action = store.getActions()[0];

  expect(action.type).toEqual(DELETE_ITEM);
});
