import { Metadata } from 'next';
import { getProjectBySlug } from '@/sanity/lib/settings/getProjectBySlug';
import { notFound } from "next/navigation";
import ImageComponent from '@/components/image';
import { PortableText } from 'next-sanity';

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
  const { slug } = params;
  const project = await getProjectBySlug(slug);
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
    <h1 className='lg:text-6xl md:text-4xl text-2xl font-serif leading-none md:mb-8 mb-4'><span className='text-accent'>{project.title}</span> {project.year}</h1>
    <hr className='border-accent md:mb-8 mb-4' />
    <ImageComponent
    image={project.cover}
    className='h-[37vw] w-full object-cover'
    />
    <figcaption className='text-sm'>{project.cover.copyright}</figcaption>
    
    <div className="grid md:grid-cols-5 grid-cols-1 md:gap-4 md:mt-8 mt-4 md:divide-x md:divide-y-0 divide-y divide-accent">
    <div className='col-span-3 md:pb-4 divide-y divide-accent'>
      <div className='about-text'>
      <h2 className='lg:text-4xl md:text-3xl text-xl font-serif text-accent md:mb-4 mb-2'>about</h2>
      <PortableText 
      value={project.about} 
      components={{
        block: {
          normal: ({ children }) => <p className='leading-tight mb-4'>{children}</p>,
          h2: ({ children }) => <h2 className='border-t border-accent pt-4 lg:text-4xl md:text-3xl md:mb-4 mb-2 text-xl font-serif text-accent'>{children}</h2>
        },
        }}
      />
      </div>
      {project.quoteMain && project.quoteMain.map((quote: { _key: string; text: string; author: string }) => (
      <div key={quote._key} className='py-4'> 
      <p className='font-serif text-accent text-6xl mb-[-0.5rem]'>“</p>
        <blockquote className='font-serif text-xl md:leading-tight leading-none'>{quote.text}</blockquote>
        <p className='pt-2'>{`${quote.author}`}</p>
      </div>
      ))}

      {project.creditsMain && (
      <div className='credits-main py-4'>
      <h2 className='lg:text-4xl md:text-3xl text-xl font-serif text-accent md:mb-4 mb-2'>credits</h2>
      <PortableText 
      value={project.creditsMain} 
      components={{block: {normal: ({ children }) => <p className='leading-tight mb-4'>{children}</p>,},}}
      />
      </div>
      )
      }

    </div>
    <div className='col-span-2 md:pl-4 md:pt-0 pt-4 divide-y divide-accent'>
     {project.quoteCredits && (
      <>
      {project.quoteCredits.map((quote: { _key: string; text: string; author: string }) => (
      <div key={quote._key} className='mt-[-0.5rem] mb-4'> 
      <p className='font-serif text-accent text-6xl mb-[-0.5rem]'>“</p>
        <blockquote className='font-serif text-3xl md:leading-tight leading-none'>{quote.text}</blockquote>
        <p className='pt-2'>{`—${quote.author}`}</p>
      </div>
      ))}
      </>
     )}
     
     {project.credits  && (
      <div className='credits md:py-0 py-4'>
      <h2 className='lg:text-4xl md:text-3xl text-xl font-serif text-accent md:mb-4 mb-2'>credits</h2>
      <PortableText 
        value={project.credits}
        components={{block: {normal: ({ children }) => <p className='leading-tight mb-4'>{children}</p>,},}}
      />
      </div>
     )}
      
    </div>
    </div>
    <hr className='border-accent' />
    <div className='md:mt-8 mt-4'>
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
          <div key={image._key} className='w-full h-full md:mb-0 mb-4'>
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