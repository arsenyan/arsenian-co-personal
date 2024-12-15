import { sanityFetch } from '@/sanity/lib/live';
import { Metadata } from 'next';
import { PortableText } from 'next-sanity';

export const generateMetadata = async (): Promise<Metadata> => {
  const query = `*[_type == "settings"][0]`;
  const { data: settings } = await sanityFetch({ query });
  return {
    title: `Contacts | ${settings.siteTitle}`,
    description: '',
    openGraph: {
      title: `Contacts | ${settings.siteTitle}`,
      description: 'Artem Arsenian is a nomadic art manager, producer and curator of performative art, marketing/digital media specialist and researcher. Based between France and Germany.',
    },
  };
};

export default async function CV() {
  const query = `*[_type == "settings"][0]{
    contacts
  }`;
  const {data: settings} = await sanityFetch({ query });

  return (
    <>
    <div className="h-[60vh]">
      <h1 className="font-serif lg:text-6xl md:text-4xl text-2xl md:pb-8 pb-4">Contacts</h1>
      <hr className="border-accent md:pb-8 pb-4" />
      <PortableText 
        value={settings.contacts} 
        components={{
          marks: {
            link: ({ value, children }) => {
              const { href } = value;
              return (
                <a href={href} className='text-accent'>{children}</a>
              )
            }
          }
        }}
      />
    </div>
    </>
  );
}