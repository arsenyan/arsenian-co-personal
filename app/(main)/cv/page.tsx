import { Metadata } from 'next';
import { sanityFetch } from '@/sanity/lib/live';
import EducationFellowships from '@/components/page/EducationFellowships';
import Work from '@/components/page/Work';

export const generateMetadata = async (): Promise<Metadata> => {
  const query = `*[_type == "settings"][0]`;
  const { data: settings } = await sanityFetch({ query });
  return {
    title: `CV | ${settings.siteTitle}`,
    description: '',
    openGraph: {
      title: `CV | ${settings.siteTitle}`,
      description: 'Artem Arsenian is a nomadic art manager, producer and curator of performative art, marketing/digital media specialist and researcher. Based between France and Germany.',
      images: '/api/og?title=CV',
    },
  };
};

export default async function CV() {
  const query = `*[_type == "curriculum"][0]`;
  const { data: cv } = await sanityFetch({ query });

  return (
    <div className='grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-16'>
      <Work work={cv.work} />
      <EducationFellowships educationFellowships={cv.educationFellowships} />
    </div>
  );
}