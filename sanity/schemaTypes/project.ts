import { defineField, defineArrayMember, defineType } from "sanity"
import { GrProjects } from "react-icons/gr";

export const projectType = defineType ({
    name: 'project',
    title: 'Project',
    type: 'document',
    icon: GrProjects,  
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'year',
            title: 'Year',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'cover',
            title: 'Cover',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
            {
                name: 'alt',
                title: 'Alternative text',
                type: 'string',
                description: 'Important for SEO and accessibility.',
                validation: Rule => Rule.required()
            },
            {
                name: 'copyright',
                title: 'Copyright',
                type: 'string',
                description: 'Author of the Photo'
            }
            ]
        }),
        defineField({
            name: 'about',
            title: 'About',
            type: 'blockContent'
        }),
        defineField({
            name: 'quoteMain',
            title: 'Quote',
            description: 'Main quote',
            type: 'array',
            of: [{ type: 'object', fields: [
                { name: 'text', title: 'Text', type: 'text' },
                { name: 'author', title: 'Author', type: 'string' }
            ]}],
        }),
        defineField({
            name: 'credits',
            title: 'Credits',
            type: 'blockContent'
        }),
        defineField({
            name: 'creditsMain',
            title: 'Credits Main Block',
            type: 'blockContent'
        }),
        defineField({
            name: 'quoteCredits',
            title: 'Quote',
            description: 'Quote for the credits',
            type: 'array',
            of: [{ type: 'object', fields: [
                { name: 'text', title: 'Text', type: 'text' },
                { name: 'author', title: 'Author', type: 'string' }
            ]}],
        }),
        defineField({
            name: 'galleryPage',
            title: 'Gallery',
            description: 'Gallery of images and videos',
            type: 'array',
            of: [
            defineArrayMember({ name: 'gallery', type: 'gallery', }),
            defineArrayMember({ name: 'video', type: 'video' }),
            ]
            }),
    ],
})