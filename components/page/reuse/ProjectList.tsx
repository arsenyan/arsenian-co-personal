/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { motion } from "motion/react";

import React from 'react';
import Link from 'next/link';
import { PortableText } from 'next-sanity';
import ProjectItem from "@/components/ProjectItem";

interface Project {
  title: string;
  year: string;
  type: string;
  role: any;
  reference?: {
    slug: {
      current: string;
    };
  };
  _key: string;
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div>
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }} 
        className='font-serif lg:text-6xl md:text-4xl text-2xl md:mb-10 mb-4'>
          projects
      </motion.h2>
      <motion.ul className='flex flex-col divide-y border-t border-accent divide-accent'>
      {projects.map((project, index) => (
        <motion.li
        className='group'
        key={project._key}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        >
        <ProjectItem project={project} />
        </motion.li>
      ))}
      </motion.ul>
    </div>
  );
};

export default ProjectList;