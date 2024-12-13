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
      <h2 className='font-serif text-6xl'>Projects</h2>
      <ul className='flex flex-col gap-4 divide-y border-t border-accent divide-accent'>
        {projects.map((project) => (
          <li className='pt-4' key={project._key}>
            <div className='text-2xl'>
              {project.year} <span className='text-accent'>{project.title}</span>
            </div>
            <div>{project.type}</div>
            <div>{project.role}</div>
            {project.reference && (
              <Link href={`/projects/${project.reference.slug.current}`}>
                View Project
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;