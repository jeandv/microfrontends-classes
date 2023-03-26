import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

it('Renders correctly', () => {

  const tree = renderer
    .create(<Button label='OLLLI!' />)
    .toJSON();

  expect(tree).toMatchSnapshot();

});