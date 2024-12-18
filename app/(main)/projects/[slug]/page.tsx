import { Metadata } from 'next';
import { getProjectBySlug } from '@/sanity/lib/settings/getProjectBySlug';
import { notFound } from "next/navigation";
import ImageComponent from '@/components/image';
import { PortableText } from 'next-sanity';

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) {
    return notFound();
  }

  return {
    title: `${project.title} | Artem Arsenian`,
    description: 'Realised Project',
    openGraph: {
      title: `${project.title}`,
      description: 'Realised Project',
      images: `/api/og?title=${encodeURIComponent(project.title)}&image=${encodeURIComponent(project.cover.asset.url)}?w=1200`,
    },
  };
};

async function ProjectPage({ 
  params,
} : 

{ 
   params: Promise<{ 
    slug: string 
  }>; 
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
  return notFound();
  }
  return (
  
  <div>
    <h1 className='mb-4 font-serif text-2xl leading-none lg:text-6xl md:text-4xl md:mb-8'><span className='text-accent'>{project.title}</span> {project.year}</h1>
    <hr className='mb-4 border-accent md:mb-8' />
    <ImageComponent
    image={project.cover}
    className='h-[37vw] w-full object-cover'
    />
    <figcaption className='text-sm'>{project.cover.copyright}</figcaption>
    
    <div className="grid grid-cols-1 mt-4 divide-y md:grid-cols-5 md:gap-4 md:mt-8 md:divide-x md:divide-y-0 divide-accent">
    <div className='col-span-3 divide-y md:pb-4 divide-accent'>
      <div className='about-text'>
      <h2 className='mb-2 font-serif text-xl lg:text-4xl md:text-3xl text-accent md:mb-4'>about</h2>
      <PortableText 
      value={project.about} 
      components={{
        block: {
          normal: ({ children }) => <p className='mb-4 leading-tight'>{children}</p>,
          h2: ({ children }) => <h2 className='pt-4 mb-2 font-serif text-xl border-t border-accent lg:text-4xl md:text-3xl md:mb-4 text-accent'>{children}</h2>
        },
        }}
      />
      </div>
      {project.quoteMain && project.quoteMain.map((quote: { _key: string; text: string; author: string }) => (
      <div key={quote._key} className='py-4'> 
      <p className='font-serif text-accent text-6xl mb-[-0.5rem]'>“</p>
        <blockquote className='font-serif text-xl leading-none md:leading-tight'>{quote.text}</blockquote>
        <p className='pt-2'>{`${quote.author}`}</p>
      </div>
      ))}

      {project.creditsMain && (
      <div className='py-4 credits-main'>
      <h2 className='mb-2 font-serif text-xl lg:text-4xl md:text-3xl text-accent md:mb-4'>credits</h2>
      <PortableText 
      value={project.creditsMain} 
      components={{block: {normal: ({ children }) => <p className='mb-4 leading-tight'>{children}</p>,},}}
      />
      </div>
      )
      }

    </div>
    <div className='col-span-2 pt-4 divide-y md:pl-4 md:pt-0 divide-accent'>
     {project.quoteCredits && (
      <>
      {project.quoteCredits.map((quote: { _key: string; text: string; author: string }) => (
      <div key={quote._key} className='mt-[-0.5rem] mb-4'> 
      <p className='font-serif text-accent text-6xl mb-[-0.5rem]'>“</p>
        <blockquote className='font-serif text-3xl leading-none md:leading-tight'>{quote.text}</blockquote>
        <p className='pt-2'>{`—${quote.author}`}</p>
      </div>
      ))}
      </>
     )}
     
     {project.credits  && (
      <div className='py-4 credits md:py-0'>
      <h2 className='mb-2 font-serif text-xl lg:text-4xl md:text-3xl text-accent md:mb-4'>credits</h2>
      <PortableText 
        value={project.credits}
        components={{block: {normal: ({ children }) => <p className='mb-4 leading-tight'>{children}</p>,},}}
      />
      </div>
     )}
      
    </div>
    </div>
    <hr className='border-accent' />
    <div className='mt-4 md:mt-8'>
      {project.galleryPage && project.galleryPage.map((item: { _key: string; _type: string; url?: string; images?: { _key: string; asset: { _id: string; metadata: { lqip: string; }; }; hotspot: { x: number; y: number; width: number; height: number; }; crop: { left: number; right: number; top: number; bottom: number; }; copyright?: string; }[] }) => {
      if (item._type === 'video' && item.url) {
        return (
        <div key={item._key} className='mb-4 bg-black'>
          <iframe 
          src={item.url} 
          title="Project Video" 
          allowFullScreen 
          className='w-full aspect-video' 
          />
        </div>
        );
      } else if (item._type === 'gallery' && item.images) {
        return (
        <div key={item._key} className='md:flex md:gap-4 md:pb-4'>
          {item.images.map((image: { _key: string; asset: { _id: string; metadata: { lqip: string; }; }; hotspot: { x: number; y: number; width: number; height: number; }; crop: { left: number; right: number; top: number; bottom: number; }; copyright?: string }) => (
          <div key={image._key} className='w-full h-full mb-4 md:mb-0'>
        <ImageComponent
          image={image}
          className='object-cover w-full h-full'
        />
        {image.copyright && (
        <figcaption className='text-sm'>{image.copyright}</figcaption>
        )}
          </div>
          ))}
        </div>
        );
      }
      return null;
      })}
    </div>
    
  </div>

  )
}

export default ProjectPage