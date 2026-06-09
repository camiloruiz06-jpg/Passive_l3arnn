import { createClient } from '@sanity/client'
import { createImageUrlBuilder as imageUrlBuilder } from '@sanity/image-url'

export const client = createClient({
  projectId: 'u805dweu',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
