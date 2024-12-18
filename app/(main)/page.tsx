import { sanityFetch } from '@/sanity/lib/live';
import Hero from '@/components/page/Hero';
import PointsList from '@/components/page/PointsList';
import ProjectList from '@/components/page/ProjectList';
import Announcement from '@/components/page/Announcement';
import { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
  const query = `*[_type == "settings"][0]`;
  const { data: settings } = await sanityFetch({ query });
  return {
    title: `${settings.siteTitle}`,
    description: '',
    openGraph: {
      title: `${settings.siteTitle}`,
      description: 'Artem Arsenian is a nomadic art manager, producer and curator of performative art, marketing/digital media specialist and researcher. Based between France and Germany.',
      images: '/api/og',
    },
  };
};

export default async function HomePage() {
  const query = `*[_type == "settings"][0]{
    siteTitle,
    description,
    points,
    projectList,
    "mainImage": mainImage {
      ...,
      asset->{
        ...
      }
    }
  }`;
  const {data: settings} = await sanityFetch({ query });

  return (
    <>
    <Hero
      description={settings.description}
      mainImage={settings.mainImage}
    />
    <PointsList points={settings.points} />
    <Announcement />
    <ProjectList list={settings.projectList} />
    </>
  );
}