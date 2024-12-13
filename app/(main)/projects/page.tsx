import { client } from '@/sanity/lib/client';
import ProjectList from '@/components/page/reuse/ProjectList';

export default async function ProjectsPage() {
  const query = `*[_type == "projects"][0] {
    projects[] {
      title,
      year,
      type,
      role,
      reference-> {
        slug
      },
      _key
    }
  }`;
  const data = await client.fetch(query);

  return (
    <div>
      <ProjectList projects={data.projects} />
    </div>
  );
}