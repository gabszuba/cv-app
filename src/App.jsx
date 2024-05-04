import { useState, React } from 'react';
import './styles/index.css';
import Resume from './components/Resume';
import Accordion from './components/Accordion';

export default function App() {
  const [education, setEducation] = useState({
    degree: '',
    institution: '',
    graduationDate: '',
  });

  const [experience, setExperience] = useState({
    company: '',
    position: '',
    date: '',
    address: '',
  });

  const [generalInfo, setGeneralInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleEducationChange = (field, value) => {
    setEducation({ ...education, [field]: value });
  };

  const handleExperienceChange = (field, value) => {
    setExperience({ ...experience, [field]: value });
  };

  const handleGeneralInfoChange = (field, value) => {
    setGeneralInfo({ ...generalInfo, [field]: value });
  };

  return (
    <div className="bg-beige grid grid-cols-2 gap-10 p-10  h-screen ">
      <Accordion
        generalInfo={generalInfo}
        experience={experience}
        education={education}
        handleEducationChange={handleEducationChange}
        handleExperienceChange={handleExperienceChange}
        handleGeneralInfoChange={handleGeneralInfoChange}
      />
      <Resume
        education={education}
        experience={experience}
        generalInfo={generalInfo}
      />
    </div>
  );
}
