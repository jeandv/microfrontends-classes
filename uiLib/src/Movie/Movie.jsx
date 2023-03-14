import React from 'react';
import PropTypes from 'prop-types';
import LabelTape from '../LabelTape/LabelTape';
import './Movie.css';

const Movie = ({ title, imgUrl }) => {
  return (
    <div className='ui-movie'>
      <LabelTape label='Preventa' variant='discount' />
      <div className='ui-movie-img'>
        <img src={imgUrl} alt={title} />
      </div>
      <div className='ui-movie-title'>
        <h4 className='ui-movie-title-text'>{title}</h4>
      </div>
    </div>
  );
};

Movie.propTypes = {
  /**
   * What color should the button be?
   */
  variant: PropTypes.oneOf(['right', 'left', 'diagonal']),
  /**
   * Label text (Required)
   */
  label: PropTypes.string.isRequired,
  /**
   * Movie title (Required)
   */
  title: PropTypes.string.isRequired,
  /**
   * URL Image title (Required)
   */
  imgUrl: PropTypes.string.isRequired,
};

Movie.defaultProps = {
  variant: 'promotions',
  imgUrl:
    'https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/gdv2pu6io6ekpg5r8mta/back-to-the-future?fimg-ssr-default',
  title: 'Movie title',
  label: 'Promociones',
};

export default Movie;
