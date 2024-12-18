import React from 'react';
import { Link } from 'next-view-transitions'
import { PortableText, PortableTextBlock } from 'next-sanity';

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

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const commonStyles = 'lg:grid lg:grid-cols-12 lg:gap-7 md:py-4 lg:items-center md:grid md:grid-cols-10 md:gap-x-4 grid grid-cols-4 py-2';
  const titleStyles = 'lg:text-3xl md:text-2xl text-xl font-serif lg:col-span-6 md:col-span-6 md:justify-self-start col-span-3';
  const linkStyles = 'text-accent underline decoration-1 underline-offset-4 group-hover:no-underline group-hover:text-white transition-colors';
  const containerStyles = project.reference ? `${commonStyles} hover:bg-accent group-hover:text-white transition-colors` : commonStyles;
  const titleClass = project.reference ? `${titleStyles} ${linkStyles}` : titleStyles;

  const content = (
    <div className={containerStyles}>
      <div className='row-span-3 font-serif text-xl lg:text-3xl md:text-2xl lg:row-span-1 md:row-span-2'>
        {project.year}
      </div>
      <div className={titleClass}>
        {project.title}
      </div>
      <div className='col-span-3 lg:col-span-2 md:col-span-3 lg:justify-self-auto md:justify-self-end lg:text-left md:text-right'>{project.type}</div>
      <div className='col-span-3 lg:col-span-3 md:col-span-3'><PortableText value={project.role} /></div>
    </div>
  );

  return project.reference ? (
    <Link href={`/projects/${project.reference.slug.current}`}>
      {content}
    </Link>
  ) : (
    content
  );
};

export default ProjectItem;