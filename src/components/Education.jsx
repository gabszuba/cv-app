import React from 'react';
import PropTypes from 'prop-types';
import CustomInput from './CustomInput';
import Chevron from './Chevron';

export default function Education({
  education, onChange, isActive, onShow,
}) {
  const { degree, institution, graduationDate } = education;

  return (
    <section className="educational-info-medium">
      <div className="flex justify-between">
        <h2 className="text-xl font-medium">Education</h2>
        <Chevron isActive={isActive} onShow={onShow} />
      </div>
      {isActive ? (
        <div className="">
          <h3 className="text-2xl font-bold">Add your educational background</h3>
          <CustomInput
            label="Degree"
            type="text"
            placeholder="e.g., Bachelor of Science in Computer Science"
            value={degree}
            onChange={(e) => onChange('degree', e.target.value)}
          />
          <CustomInput
            label="Institution"
            type="text"
            placeholder="e.g University of Texas "
            value={institution}
            onChange={(e) => onChange('institution', e.target.value)}
          />
          <CustomInput
            label="Graduation Date"
            type="text"
            placeholder="Month, Year"
            value={graduationDate}
            onChange={(e) => onChange('graduationDate', e.target.value)}
          />
        </div>
      ) : null}
    </section>
  );
}

Education.propTypes = {
  education: PropTypes.shape({
    degree: PropTypes.string,
    institution: PropTypes.string,
    graduationDate: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  onShow: PropTypes.func.isRequired,
};
