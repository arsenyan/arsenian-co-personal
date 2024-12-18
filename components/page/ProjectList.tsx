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
      <div className="flex flex-col gap-4 border-t divide-y divide-accent border-accent">
        {list.map((project) => (
          <div key={project._key} className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2">
            <h1 className="font-serif text-xl leading-none text-accent md:text-2xl">{project.name}</h1>
            <p className="leading-tight">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProjectList;