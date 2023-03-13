import React from 'react';
import './Button.scss';

const Button = ({ variant, ...props }) => {
  return (
    <button
      className={`ui-button ${variant && 'ui-button-' + variant}`}
      {...props}
    >
      Button 01
    </button>
  );
};

export default Button;
