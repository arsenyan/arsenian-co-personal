"use client";
import { motion } from "motion/react";

import React from 'react';
import ProjectItem from "@/components/ProjectItem";
import { PortableTextBlock } from "next-sanity";

interface Project {
  title: string;
  year: string;
  type: string;
  role: PortableTextBlock[];
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
    <>
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }} 
        className='mb-4 font-serif text-2xl lg:text-6xl md:text-4xl md:mb-10'>
          projects
      </motion.h2>
      <motion.ul className='flex flex-col border-t divide-y border-accent divide-accent'>
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
    </>
  );
};

export default ProjectList;