import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {settingsType} from './settings'
import {curriculumType} from './curriculumVi'
import {projectType} from './project'
import {pageType} from './pageType'
import {imageGalleryType} from './pageBuilder/galleryType'
import {videoType} from './pageBuilder/videoType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, imageGalleryType, videoType, pageType, projectType, settingsType, curriculumType],
}
