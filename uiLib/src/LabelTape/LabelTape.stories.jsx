import React from 'react';

import LabelTape from './LabelTape';

export default {
  title: 'ui/LabelTape',
  component: LabelTape,
};

const Template = (args) => <LabelTape {...args} />;

export const Primary = Template.bind({});

// Adding Args
// Primary.args = {
//   primary: true,
//   label: 'Comprar',
// };

// export const Secondary = Template.bind({});

// Secondary.args = {
//   primary: true,
//   label: 'Comprar',
// };
