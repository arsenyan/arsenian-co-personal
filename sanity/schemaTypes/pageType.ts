import { defineField, defineType } from "sanity"

export const pageType = defineType ({
    name: 'projects',
    title: 'Projects list',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'projects',
            title: 'Projects',
            type: 'array',
            of: [{ 
                type: 'document', 
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
                        name: 'type',
                        title: 'Type',
                        type: 'string'
                    }),
                    defineField({
                        name: 'role',
                        title: 'Description',
                        type: 'text'
                    }),
                    defineField({
                        name: 'reference',
                        title: 'Reference',
                        type: 'reference',
                        to: [{ type: 'project' }]
                    }),
                ]
            }],
        }),
     ],
})