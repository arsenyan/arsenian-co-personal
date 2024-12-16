"use client"
import React from 'react';
import ListSection from './reuse/ListSection';
import { motion } from "motion/react";

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
  return <motion.div
  id='work'
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  <ListSection title="Work" items={work} />
</motion.div>;
};

export default Work;