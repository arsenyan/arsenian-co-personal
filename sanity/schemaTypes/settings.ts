import { defineType, defineField } from 'sanity';

export const settingsType = defineType({
    name: 'settings',
    type: 'document',
    title: 'Settings',
    fields: [
        defineField({
            name: 'siteTitle',
            type: 'string',
            title: 'Site Title',
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description',
        }),
        defineField({
            name: 'mainImage',
            type: 'image',
            title: 'Main Image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'points',
            type: 'array',
            of: [{ 
                type: 'document',
                fields: [
                    defineField({
                        name: 'number',
                        type: 'string',
                        title: 'Number',
                    }),
                    defineField({
                        name: 'description',
                        type: 'text',
                        title: 'Description',
                    }),
                ], 
            }],
        }),
        defineField({
            name: 'projectList',
            type: 'array',
            of: [{ 
                type: 'document',
                fields: [
                    defineField({
                        name: 'name',
                        type: 'string',
                        title: 'Company Name',
                    }),
                    defineField({
                        name: 'description',
                        type: 'text',
                        title: 'Description',
                    }),
                    defineField({
                        name: 'city',
                        type: 'string',
                        title: 'City',
                    }),
                ], 
            }],
        }),
        defineField({
            name: 'socialLinks',
            type: 'array',
            title: 'Social Links',
            of: [{ type: 'url' }],
        }),
    ],
});