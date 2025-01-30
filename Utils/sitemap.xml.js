// app/sitemap.xml.js

import { generateSitemap } from "../app/sitemap";

export async function generateMetadata() {
  await generateSitemap();
}

export default async function SitemapPage() {
  return null;
}
