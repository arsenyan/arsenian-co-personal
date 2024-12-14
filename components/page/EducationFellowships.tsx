"use client";

import React from 'react';
import ListSection from './reuse/ListSection';
import { motion } from "motion/react";

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
  return <motion.div
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.3 }}
><ListSection title="Education & Fellowships" items={educationFellowships} /></motion.div>;
};

export default EducationFellowships;