import React from 'react';
import PropTypes from 'prop-types';

import LabelTape from '../LabelTape/LabelTape';

import './Movie.css';

export default function Movie({
  variant,
  label,
  movieTitle,
  imgUrl,
  ...props
}) {
  return (
    <div className='ui-movie' {...props}>
      <div className='ui-movie-img'>
        <img src={imgUrl} alt={movieTitle} className='ui-movie-img-asset' />
        {variant != undefined && <LabelTape label={label} variant={variant} />}
      </div>
      <div
        className={['ui-movie-title', `ui-movie-title--${variant}`].join(' ')}
      >
        <h4 className='ui-movie-title-text'>{movieTitle}</h4>
      </div>
    </div>
  );
}

Movie.propTypes = {
  /**
   * Defines label background colors.
   */
  variant: PropTypes.oneOf(['discount', 'promotions', '4dx']),
  /**
   * Label text
   */
  label: PropTypes.string,
  /**
   * Movie title (Required)
   */
  movieTitle: PropTypes.string.isRequired,
};

// Movie.defaultProps = {
//   variant: 'promotions',
//   imgUrl:
//     'https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/gdv2pu6io6ekpg5r8mta/back-to-the-future?fimg-ssr-default',
//   movieTitle: 'Movie title',
//   label: 'Promociones',
// };
