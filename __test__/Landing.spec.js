import React from 'react';
import renderer from 'react-test-renderer';
import Landing from '../src/public/components/Landing';

test('Landing renders correctly', () => {
  const component = renderer.create(<Landing />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
