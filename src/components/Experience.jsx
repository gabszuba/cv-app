import React from 'react';
import PropTypes from 'prop-types';
import CustomInput from './CustomInput';
import Chevron from './Chevron';

export default function Experience({
  experience, isActive, onShow, onChange,
}) {
  const {
    company, position, date, address,
  } = experience;

  return (
    <section className="experience">
      <div className="flex justify-between">
        <h3 className="text-xl font-medium">Experience</h3>
        <Chevron isActive={isActive} onShow={onShow} />
      </div>

      {isActive ? (
        <div>
          <h2 className="text-2xl font-bold">Add your professional experience</h2>
          <CustomInput label="Company" type="text" placeholder="Enter your company name" value={company} onChange={(e) => onChange('company', e.target.value)} />
          <CustomInput label="Position Title" type="text" placeholder="Enter your position title" value={position} onChange={(e) => onChange('position', e.target.value)} />
          <CustomInput label="Date" type="text" placeholder="Month, Year" value={date} onChange={(e) => onChange('date', e.target.value)} />
          <CustomInput label="Address" type="text" placeholder="City, Country" value={address} onChange={(e) => onChange('address', e.target.value)} />
        </div>
      ) : null}
    </section>
  );
}

Experience.propTypes = {
  experience: PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    date: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  onShow: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
