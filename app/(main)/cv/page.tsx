import { client } from '@/sanity/lib/client';
import EducationFellowships from '@/components/page/EducationFellowships';
import Work from '@/components/page/Work';


export default async function CV() {
  const query = `*[_type == "curriculum"][0]`;
  const cv = await client.fetch(query);

  return (
    <div className='grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-16'>
      <Work work={cv.work} />
      <EducationFellowships educationFellowships={cv.educationFellowships} />
    </div>
  );
}