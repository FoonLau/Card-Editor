import React from 'react';
import { mount } from 'enzyme';
import Item from './Item';

it('should render correctly', () => {
  const props = { backgroundColor: '#ffffff', width: 0, height: 0, borderRadius: 0 };
  const wrapper = mount(<Item {...props} />);
  const style = wrapper.find('.app-item').get(0).props.style;
  
  expect(style).toEqual({ ...props,  borderRadius: props.borderRadius + '%' });
});
