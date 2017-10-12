import React from 'react';
import renderer from 'react-test-renderer';
import InputBar from '../src/public/components/InputBar';

test('InputBar renders correctly', () => {
  const component = renderer.create(<InputBar />);
  const tree = component.toJSON();
  expext(tree).toMatchSnapshot();
});
