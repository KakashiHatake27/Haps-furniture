// import sanityClient from '@sanity/client';
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// export const client = sanityClient({
    export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2023-07-04',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_PUBLIC_API_TOKEN
});


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);