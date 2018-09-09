import React from 'react';
import EditorItem from './EditorItem';
import renderer from 'react-test-renderer';

it('should render correctly', () => {
  const tree = renderer.create(<EditorItem />).toJSON();

  expect(tree).toMatchSnapshot();
});
