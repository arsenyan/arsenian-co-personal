import { defineQuery, SanityClient } from "next-sanity";
import { sanityFetch } from "../live";

export const getProjectBySlug = async (slug: string) => {
    const PROJECT_BY_ID_QUERY = defineQuery(`
    *[_type == "project" && slug.current == $slug] | order(name asc)[0]

        `);

    try {
        const project = await sanityFetch({
            query: PROJECT_BY_ID_QUERY,
            params: { slug },
        });

        return project.data || null;
    } catch (error) {
        console.error("Error fetching project by ID", error);
        return null;
    }

    };
