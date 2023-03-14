import React from 'react';
import PropTypes from 'prop-types';
import './LabelTape.css';

function LabelTape({ label, variant, ...props }) {
  const mode = variant ? ` ui-label--${variant}` : null;

  return (
    <div className={'ui-label' + mode} {...props}>
      {label}
    </div>
  );
}

LabelTape.propTypes = {
  /**
   * What color should the button be?
   */
  variant: PropTypes.oneOf(['discount', 'promotions', '4dx']),
  /**
   * Label text (Required)
   */
  label: PropTypes.string.isRequired,
};

LabelTape.defaultProps = {
  variant: 'discount',
  label: 'Descuentos',
};

export default LabelTape;
