import { defineCollection, z } from "astro:content";

const animes = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        img: z.string(),
        temps: z.number(),
        watch: z.object({
            official: z.string().url(),
            unofficial: z.string().url()
        })
    })
});

export const collections = {
    animes
};