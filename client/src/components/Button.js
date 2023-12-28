// Button.js

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, type, disabled, children }) => {
  return (
    <button
    className='flex items-center justify-center py-3 px-5 m-1 rounded-2xl text-white font-semibold bg-Blue ' 
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
};

export default Button;
  