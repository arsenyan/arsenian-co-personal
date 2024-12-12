import { defineField, defineType } from "sanity";

export const curriculumType = defineType ({   
    name: 'curriculum',
    title: 'Curriculum Vitae',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'work',
            title: 'Work',
            type: 'array',
            of: [{ type: 'object', fields: [
                { name: 'year', title: 'Year', type: 'string' },
                { name: 'role', title: 'Role', type: 'string' },
                { name: 'company', title: 'Organisation', type: 'string' }
                
            ],
            preview: {
                select: {
                  title: 'company',
                  subtitle: 'year'
                }
              }
        }]
        }),
        defineField({
            name: 'educationFellowships',
            title: 'Education & Fellowships',
            type: 'array',
            of: [{ type: 'object', fields: [
                { name: 'year', title: 'Year', type: 'string' },
                { name: 'role', title: 'Role', type: 'string' },
                { name: 'company', title: 'Organisation', type: 'string' }
            ],
            preview: {
                select: {
                  title: 'company',
                  subtitle: 'year'
                }
              }
        }]
        })
    ]
})