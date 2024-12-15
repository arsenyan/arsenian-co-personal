import { sanityFetch } from '@/sanity/lib/live';
import ProjectList from '@/components/page/reuse/ProjectList';
import { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
  const query = `*[_type == "settings"][0]`;
  const { data: settings } = await sanityFetch({ query });
  return {
    title: `Projects | ${settings.siteTitle}`,
    description: '',
    openGraph: {
      title: `Projects | ${settings.siteTitle}`,
      description: 'Artem Arsenian is a nomadic art manager, producer and curator of performative art, marketing/digital media specialist and researcher. Based between France and Germany.',
    },
  };
};

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