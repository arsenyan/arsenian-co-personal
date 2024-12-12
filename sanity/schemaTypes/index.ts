import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {settingsType} from './settings'
import {curriculumType} from './curriculumVi'
import {projectType} from './project'
import {pageType} from './pageType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, pageType, projectType, settingsType, curriculumType],
}
