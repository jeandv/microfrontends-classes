import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'ui-button--primary' : 'ui-button--secondary';

  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };

  return (
    <button
      type='button'
      className={['ui-button', `ui-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

export default Button;
