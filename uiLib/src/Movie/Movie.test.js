import React from 'react';
import renderer from 'react-test-renderer';
import Movie from './Movie';

const poster = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/56c72e90-7908-4970-8e1b-b5b7098f4fda/df4gi93-bb27d107-8b1f-4dec-97f1-815424419af6.png/v1/fill/w_1280,h_1811,q_80,strp/john_wick_4___poster_v1_by_pyramid3_df4gi93-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgxMSIsInBhdGgiOiJcL2ZcLzU2YzcyZTkwLTc5MDgtNDk3MC04ZTFiLWI1YjcwOThmNGZkYVwvZGY0Z2k5My1iYjI3ZDEwNy04YjFmLTRkZWMtOTdmMS04MTU0MjQ0MTlhZjYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.xsATywrHQvyQFggEG8sGHffq7CApdMWZn7FJ9C_CgEA'

//comprobamos que renderice
it('render with label', () => {

  // creamos desde el renderer el movie component y lo convertimos a un JSON
  let movieTree = renderer.create(
    <Movie
      movieTitle='John Wick 4'
      imgUrl={poster}
      variant='4dx'
      label='4DX' />
  ).toJSON();

  // se hace el snapshot de dicho componente para mostrar como se veria con la funcion que queramos probar
  expect(movieTree).toMatchSnapshot();

});

it('render without label', () => {

  let movieTree = renderer.create(<Movie movieTitle='John Wick 4' imgUrl={poster} />).toJSON();

  expect(movieTree).toMatchSnapshot();

});