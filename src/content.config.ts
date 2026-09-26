import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
    loader: file('src/content/projects.json'),
    schema: z.object({
        id: z.string(),
        title: z.string(),
        tagline: z.string(),
        description: z.string(),
        problem: z.string(),
        solution: z.string(),
        github: z.string(),
        live: z.string(),
        accentColor: z.string(),
        features: z.array(z.string()),
        tech: z.array(z.string()),
    })

})

export const collections = { projects }

