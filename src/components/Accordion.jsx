import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Education from './Education';
import Experience from './Experience';
import GeneralInfo from './GeneralInfo';

export default function Accordion({
  education,
  experience,
  generalInfo,
  handleEducationChange,
  handleExperienceChange,
  handleGeneralInfoChange,
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-blue-light space-y-4 text-blue-dark px-10 py-6 w-full mx-auto rounded-2xl shadow-md ">
      <GeneralInfo
        generalInfo={generalInfo}
        isActive={activeIndex === 2}
        onChange={handleGeneralInfoChange}
        onShow={() => handleAccordionClick(2)}
      />
      <Experience
        experience={experience}
        onChange={handleExperienceChange}
        isActive={activeIndex === 1}
        onShow={() => handleAccordionClick(1)}
      />
      <Education
        education={education}
        onChange={handleEducationChange}
        isActive={activeIndex === 0}
        onShow={() => handleAccordionClick(0)}
      />
      <Education
        education={education}
        onChange={handleEducationChange}
        isActive={activeIndex === 0}
        onShow={() => handleAccordionClick(3)}
      />
    </div>
  );
}

Accordion.propTypes = {
  education: PropTypes.shape({
    degree: PropTypes.string,
    institution: PropTypes.string,
    graduationDate: PropTypes.string,
  }).isRequired,
  experience: PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    date: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
  generalInfo: PropTypes.shape({
    fullName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
  handleEducationChange: PropTypes.func.isRequired,
  handleExperienceChange: PropTypes.func.isRequired,
  handleGeneralInfoChange: PropTypes.func.isRequired,
};
