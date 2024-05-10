import { sanityClient } from "sanity:client";
import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug } from "@sanity/types";
import groq from "groq";

export async function getDevotionals(): Promise<Devotional[]> {
  return await sanityClient.fetch(
    groq`*[_type == "devotional" && defined(slug.current)] | order(_createdAt desc)`
  );
}

export async function getDevotional(slug: string): Promise<Devotional> {
  return await sanityClient.fetch(
    groq`*[_type == "devotional" && slug.current == $slug][0]`,
    {
      slug,
    }
  );
}

export interface Devotional {
  _type: "devotional";
  _createdAt: string;
  _updatedAt: string;
  title: string;
  slug: Slug;
  mainImage: ImageAsset;
  body: PortableTextBlock[];
  publishedAt: string;
}

export interface Author {}
