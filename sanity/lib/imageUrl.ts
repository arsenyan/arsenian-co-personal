import { client } from "./client";
import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = createImageUrlBuilder(client)

export function imageUrl(source: SanityImageSource) {
  return builder.image(source)
}
