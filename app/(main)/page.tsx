import { sanityFetch } from '@/sanity/lib/live';
import Hero from '@/components/page/Hero';
import PointsList from '@/components/page/PointsList';
import ProjectList from '@/components/page/ProjectList';
import Announcement from '@/components/page/Announcement';
import Head from 'next/head';

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
    <Head>
      <title>{settings.siteTitle}</title>
      <meta name="description" content={settings.description} />
    </Head>
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