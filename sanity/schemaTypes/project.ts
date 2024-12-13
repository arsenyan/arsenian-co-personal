import { defineField, defineType } from "sanity"
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
            name: 'gallery',
            title: 'Gallery',
            description: 'Gallery of images and videos',
            type: 'array',
            of: [{ type: 'object', fields: [
                { name: 'galleryItems', title: 'Choose Images', type: 'array', of: [{ type: 'image', fields: [{ name: 'copyright', type: 'string' }, { name: 'alt', title: 'Alternative Text', description: 'Important for SEO and accessibility.', type: 'string', validation: Rule => Rule.required() }] }] },
                { name: 'video', title: 'Video', type: 'url' },
                { name: 'columns', title: 'Columns', type: 'number' }
            ]}],
        }),
    ],
})