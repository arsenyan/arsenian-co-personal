import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";

export const getPageSettings = async () => {
    const SETTINGS_QUERY = defineQuery(`
      *[_type == "settings"][0]`);
    
    try {
      const settings = await sanityFetch({
        query: SETTINGS_QUERY,
    });
      return settings.data;
    } catch (error) {
      console.error("Error fetching settings:", error);
      return [];
    }
};
