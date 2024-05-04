/* eslint-disable react/jsx-indent */
import { React } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export default function CustomInput({
  type, placeholder, label, value, onChange,
}) {
  return (
    <div className="py-2">
    <label>
      {label}
      {' '}
      <input
        className="bg-beige border-2 font-sm border-purple rounded-sm w-full py-2 px-2 text-gray leading-tight focus:outline-none focus:bg-white focus:border-blue-dark"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
    </div>
  );
}

CustomInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
