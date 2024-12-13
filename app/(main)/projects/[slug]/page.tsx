import { getProjectBySlug } from '@/sanity/lib/settings/getProjectBySlug';

async function ProjectPage({ 
    params,
} : 

{ 
     params: Promise<{ 
        slug: string 
    }>; 
}) {

  const { slug } = await params;
  await getProjectBySlug(slug);
  return (
    <div>page</div>
  )
}

export default ProjectPage