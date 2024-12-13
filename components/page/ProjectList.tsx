// components/PointsList.tsx

interface ProjectList {
    name: string;
    description: string;
    _key: string;
  }
  
  interface ProjectListProps {
    list: ProjectList[];
  }
  
  const ProjectList: React.FC<ProjectListProps> = ({ list }) => {
    return (
      <div className="flex flex-col gap-4 divide-y divide-accent border-t border-accent">
        {list.map((project) => (
          <div key={project._key} className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-4">
            <h1 className="font-serif text-accent md:text-2xl text-xl">{project.name}</h1>
            <p className="leading-tight">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProjectList;