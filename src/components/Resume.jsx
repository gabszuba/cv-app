import React from 'react';
import PropTypes from 'prop-types';

export default function Resume({ education, experience, generalInfo }) {
  return (
    <div className="paper-container bg-white">
      <h1>{generalInfo.fullName}</h1>
      <h2>General Information</h2>
      <ul>
        <li>
          Email:
          {generalInfo.email}
        </li>
        <li>
          Phone:
          {generalInfo.phone}
        </li>
        <li>
          Address:
          {generalInfo.address}
        </li>
      </ul>
      <h2>Experience</h2>
      <ul>
        <li>
          Company:
          {experience.company}
        </li>
        <li>
          Position:
          {experience.position}
        </li>
        <li>
          Date:
          {experience.date}
        </li>
        <li>
          Address:
          {experience.address}
        </li>
      </ul>
      <h2>Education</h2>
      <ul>
        <li>
          Degree:
          {education.degree}
        </li>
        <li>
          Institution:
          {education.institution}
        </li>
        <li>
          Graduation Date:
          {education.graduationDate}
        </li>
      </ul>
    </div>
  );
}

Resume.propTypes = {
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
};
