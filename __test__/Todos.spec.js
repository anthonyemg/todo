import React from 'react';
import renderer from 'react-test-renderer';
import Todos from '../src/public/Todos';

test('Todos renders correctly', () => {
  const component = renderer.create(<Todos />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
