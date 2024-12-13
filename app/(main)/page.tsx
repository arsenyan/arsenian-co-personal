import { client } from '@/sanity/lib/client';
import Hero from '@/components/page/Hero';
import PointsList from '@/components/page/PointsList';
import ProjectList from '@/components/page/ProjectList';
import Announcement from '@/components/page/Announcement';

export default async function HomePage() {
  const query = `*[_type == "settings"][0]{
    siteTitle,
    description,
    points,
    projectList,
    "mainImage": mainImage{
      asset->{
        url,
        metadata {
          dimensions { width, height },
          lqip
        }
      }
    }
  }`;
  const settings = await client.fetch(query);

  return (
    <>
    <Hero
      imageUrl={settings.mainImage.asset.url}
      imageWidth={settings.mainImage.asset.metadata.dimensions.width}
      imageHeight={settings.mainImage.asset.metadata.dimensions.height}
      imageLqip={settings.mainImage.asset.metadata.lqip}
      description={settings.description}
    />
    <PointsList points={settings.points} />
    <Announcement />
    <ProjectList list={settings.projectList} />
    </>
  );
}