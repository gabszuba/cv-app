import React from 'react';
import PropTypes from 'prop-types';

export default function Chevron({ isActive, onShow }) {
  return (
    <button
      type="button"
      aria-label="Expand content"
      aria-expanded={isActive ? 'true' : 'false'}
      onClick={onShow}
      className="cursor-pointer bg-transparent border-none p-0 m-0 transition-transform transform duration-300 ease-in-out"
      style={{ transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)' }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width={24}
        height={24}
        className="stroke-blue-dark"
      >
        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
      </svg>
    </button>
  );
}

Chevron.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onShow: PropTypes.func.isRequired,
};
