import {defineField, defineType} from 'sanity'

export const videoType = defineType({
  name: 'video',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      type: 'string',
      title: 'URL',
    }),
  ],
})