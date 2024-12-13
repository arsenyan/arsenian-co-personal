import { defineField, defineType } from "sanity"
import { IoDocumentOutline } from "react-icons/io5";

export const pageType = defineType ({
    name: 'projects',
    title: 'Projects list',
    type: 'document',
    icon: IoDocumentOutline,
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