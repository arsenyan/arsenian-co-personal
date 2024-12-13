import React from 'react';
import ListSection from './reuse/ListSection';

interface WorkItem {
  role: string;
  year?: string;
  company: string;
  _key: string;
}

interface WorkProps {
  work: WorkItem[];
}

const Work: React.FC<WorkProps> = ({ work }) => {
  return <ListSection title="Work" items={work} />;
};

export default Work;