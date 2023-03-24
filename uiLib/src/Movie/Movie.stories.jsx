import React from 'react';

import Movie from './Movie';

export default {
  title: 'ui/Movie',
  component: Movie,
};

const CartelTemplate = (args) => <Movie {...args} />;

export const Primary = CartelTemplate.bind({});

// Cartel.args = {
//   label: 'Promociones',
//   variant: undefined,
//   movieTitle: 'Movie 01',
//   src: 'https://static.cinepolis.com/img/peliculas/41818/1/1/41818.jpg',
// };
