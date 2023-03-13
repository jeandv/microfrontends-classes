import React from 'react';

import Button from './Button';

export default {
  title: 'library/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

// Adding Args
Primary.args = {
  primary: true,
  label: 'Comprar',
};

export const Secondary = Template.bind({});

Secondary.args = {
  primary: true,
  label: 'Comprar',
};
