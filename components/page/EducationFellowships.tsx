import React from 'react';
import ListSection from './reuse/ListSection';

interface EducationFellowship {
  role: string;
  year?: string;
  company: string;
  _key: string;
}

interface EducationFellowshipsProps {
  educationFellowships: EducationFellowship[];
}

const EducationFellowships: React.FC<EducationFellowshipsProps> = ({ educationFellowships }) => {
  return <ListSection title="Education & Fellowships" items={educationFellowships} />;
};

export default EducationFellowships;