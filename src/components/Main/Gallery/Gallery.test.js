import React from 'react';
import { shallow } from 'enzyme';
import { Gallery } from './Gallery';
import GalleryItem from './GalleryItem/GalleryItem';

it('should render correctly', () => {
  const props = {
    items: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ]
  };
  const wrapper = shallow(<Gallery {...props} />);

  expect(wrapper.find(GalleryItem)).toHaveLength(props.items.length);
});
