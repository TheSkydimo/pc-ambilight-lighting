import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const dateOptional = z.coerce.date().optional();

const bestPicks = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    updatedAt: dateOptional,
    lastTestedAt: dateOptional,
    tldr: z.string().min(1).optional(),
    picks: z
      .array(
        z.object({
          name: z.string().min(1),
          verdict: z.string().min(1),
          bestFor: z.string().min(1),
          pricing: z.string().min(1).optional(),
          notes: z.string().min(1).optional(),
        }),
      )
      .min(1),
    disclosure: z.string().min(1).optional(),
  }),
});

const reviews = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    updatedAt: dateOptional,
    lastTestedAt: dateOptional,
    tldr: z.string().min(1).optional(),
    pros: z.array(z.string().min(1)).min(1).optional(),
    cons: z.array(z.string().min(1)).min(1).optional(),
    bestFor: z.array(z.string().min(1)).min(1).optional(),
    notFor: z.array(z.string().min(1)).min(1).optional(),
    disclosure: z.string().min(1).optional(),
  }),
});

const comparisons = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    updatedAt: dateOptional,
    lastTestedAt: dateOptional,
    tldr: z.string().min(1).optional(),
    scenarios: z
      .array(
        z.object({
          scenario: z.string().min(1),
          pick: z.string().min(1),
          why: z.string().min(1),
        }),
      )
      .min(1)
      .optional(),
    disclosure: z.string().min(1).optional(),
  }),
});

const guides = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    updatedAt: dateOptional,
    lastTestedAt: dateOptional,
    tldr: z.string().min(1).optional(),
    difficulty: z.enum(["beginner", "intermediate", "advanced"]).optional(),
    timeMinutes: z.number().int().positive().optional(),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/faq" }),
  schema: z.object({
    title: z.string().min(1),
    items: z
      .array(
        z.object({
          q: z.string().min(1),
          a: z.string().min(1),
        }),
      )
      .min(1),
  }),
});

export const collections = { bestPicks, reviews, comparisons, guides, faq };
