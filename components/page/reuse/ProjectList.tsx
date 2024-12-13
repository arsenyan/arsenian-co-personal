import React from 'react';
import Link from 'next/link';

interface Project {
  title: string;
  year: string;
  type: string;
  role: string;
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
      <h2 className='font-serif lg:text-6xl md:text-4xl text-2xl md:mb-10 mb-4'>projects</h2>
    <ul className='flex flex-col divide-y border-t border-accent divide-accent'>
      {projects.map((project) => (
        <li className='group' key={project._key}>
        {project.reference ? (
          <Link href={`/projects/${project.reference.slug.current}`}>
            <div className='md:grid lg:grid-cols-12 md:grid-cols-7 py-4 items-center lg:gap-6 gap-0 hover:bg-accent group-hover:text-white transition-all'>
            <div className='lg:text-3xl md:text-2xl text-xl font-serif'>
              {project.year}
            </div>
            <div className='lg:text-3xl md:text-2xl text-xl font-serif lg:col-span-6 md:col-span-6 text-accent group-hover:text-white'>
              {project.title}
            </div>
            <div className='lg:col-span-2 md:col-span-7'>{project.type}</div>
            <div className='lg:col-span-3 md:col-span-7'>{project.role}</div>
            </div>
          </Link>
        ) : (
          <>
            <div className='md:grid py-4 items-center lg:grid-cols-12 md:grid-cols-7 lg:gap-6 gap-0'>
            <div className='lg:text-3xl md:text-2xl text-xl font-serif'>
              {project.year}
            </div>
            <div className='lg:text-3xl md:text-2xl text-xl font-serif lg:col-span-6 md:col-span-6'>
              {project.title}
            </div>
            <div className='lg:col-span-2 md:col-span-7'>{project.type}</div>
            <div className='lg:col-span-3 md:col-span-7'>{project.role}</div>
            </div>
          </>
        )}
        </li>
      ))}
    </ul>
    </div>
  );
};

export default ProjectList;