import type { MetadataRoute } from 'next'
import { sanityFetch } from '@/sanity/lib/live';
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://acme.com';
const query = `*[_type == "project"]{
slug
}`;
const { data: projects } = await sanityFetch({ query });

return [
    {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
    },
    {
        url: `${baseUrl}/cv`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    },
    {
        url: `${baseUrl}/projects`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    },
    ...projects.map((project: { slug: { current: any; }; }) => ({
        url: `${baseUrl}/projects/${project.slug.current}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    })),
]
}