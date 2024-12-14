import { getProjectBySlug } from '@/sanity/lib/settings/getProjectBySlug';
import { notFound } from "next/navigation";
import Image from 'next/image';
import { PortableText } from 'next-sanity';

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
    <h1 className='lg:text-6xl md:text-4xl text-2xl font-serif text-accent md:mb-8 mb-4'>{project.title}</h1>
    <hr className='border-accent md:mb-8 mb-4' />
    <Image
    className='h-[37vw] w-full object-cover' 
    src={project.cover.asset.url} 
    alt={project.title} 
    width={project.cover.asset.metadata.dimensions.width} 
    height={project.cover.asset.metadata.dimensions.height}
    placeholder='blur'
    blurDataURL={project.cover.asset.metadata.lqip}
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
        <p className='pt-2'>{`—${quote.author}`}</p>
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
      <div className='credits py-4'>
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
      {project.galleryPage && project.galleryPage.map((item: any) => {
      if (item._type === 'video') {
        return (
        <div key={item._key} className='mb-4 bg-black'>
          <iframe 
          src={item.url} 
          title="Project Video" 
          allowFullScreen 
          className='w-full h-[50vw]' 
          />
        </div>
        );
      } else if (item._type === 'gallery') {
        return (
        <div key={item._key} className='md:flex md:gap-4 md:pb-4'>
          {item.images.map((image: any) => (
          <div key={image._key} className='h-full md:mb-0 mb-4'>
            <Image
            src={image.asset.url}
            alt={image.asset.alt || 'Gallery Image'}
            width={3200}
            height={2133}
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