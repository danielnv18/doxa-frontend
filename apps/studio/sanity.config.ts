import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'

export default defineConfig({
  name: 'default',
  title: 'Doxa',

  projectId: 'wzrlzpuz',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), unsplashImageAsset()],

  schema: {
    types: schemaTypes,
  },
})
