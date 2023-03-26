import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

it('Renders correctly', () => {

  const tree = renderer
    .create(<Button label='Hello' />)
    .toJSON();

  expect(tree.props.type).toBe('button');
  expect(tree).toMatchSnapshot();

});

it('Changes when is hovered', () => {

  const component = renderer.create(<Button label='Hello' />)

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();

  // Checar la funcion que tiene
  renderer.act(() => {
    tree.props.onMouseEnter();
  });

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});