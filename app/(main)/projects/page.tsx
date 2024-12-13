import { sanityFetch } from '@/sanity/lib/live';
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
  const { data: data } = await sanityFetch({ query });

  return (
    <>
    <div>
      <ProjectList projects={data.projects} />
    </div>
    </>
  );
}