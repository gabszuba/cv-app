import React from 'react';
import PropTypes from 'prop-types';
import CustomInput from './CustomInput';
import Chevron from './Chevron';

export default function GeneralInfo({
  generalInfo, isActive, onShow, onChange,
}) {
  const {
    fullName, email, phone, address,
  } = generalInfo;

  return (
    <section className="general-inf">
      <div className="flex justify-between">
        <h3 className="text-xl font-medium">General Information</h3>
        <Chevron isActive={isActive} onShow={onShow} />
      </div>

      {isActive ? (
        <div>
          <h2 className="text-2xl font-bold">Add your personal details</h2>
          <CustomInput label="Full name" type="text" placeholder="Enter your full name" value={fullName} onChange={(e) => onChange('fullName', e.target.value)} />
          <CustomInput label="Email" type="email" placeholder="Enter your email" value={email} onChange={(e) => onChange('email', e.target.value)} />
          <CustomInput label="Phone" type="text" placeholder="Enter your phone" value={phone} onChange={(e) => onChange('phone', e.target.value)} />
          <CustomInput label="Address" type="text" placeholder="City, Country" value={address} onChange={(e) => onChange('address', e.target.value)} />
        </div>
      ) : null}
    </section>
  );
}

GeneralInfo.propTypes = {
  generalInfo: PropTypes.shape({
    fullName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  onShow: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
