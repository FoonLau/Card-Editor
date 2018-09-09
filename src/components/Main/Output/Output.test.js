import React from 'react';
import renderer from 'react-test-renderer';
import { Output } from './Output';

it('should render correctly', () => {
  const tree = renderer.create(<Output />).toJSON();

  expect(tree).toMatchSnapshot();
});
