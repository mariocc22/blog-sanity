import  ImageUrlBuilder  from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: "2022-03-25",
})

const builder = ImageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source);
}