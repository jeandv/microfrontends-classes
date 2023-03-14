import React from 'react';

import Movie from './Movie';

export default {
  title: 'ui/Movie',
  component: Movie,
};

const Template = (args) => <Movie {...args} />;

export const Primary = Template.bind({});
