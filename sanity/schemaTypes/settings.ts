import { CogIcon } from '@sanity/icons'
import { defineType, defineField } from 'sanity';

export const settingsType = defineType({
    name: 'settings',
    type: 'document',
    title: 'Settings',
    icon: CogIcon,
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
            name: 'socialLinks',
            type: 'array',
            title: 'Social Links',
            of: [{ type: 'url' }],
        }),
    ],
    __experimental_actions: ['update', 'publish'],
    singleton: true, // disable create and delete actions
});