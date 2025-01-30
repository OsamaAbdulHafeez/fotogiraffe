// app/sitemap.js

import { blogs } from "@/data/blogs";
import { categories } from "@/data/categories";
const staticRoutes = [
  "/", // Home Page
  "/choose-your-photo-book", // Photo Books Selection Page
  "/cookie-policy", // Cookie Notice
  "/privacy-notice", // Privacy Notice
  "/terms-and-conditions", // Terms and Conditions
  "/our-story", // Our Story
  "/refund-policy", // Refunds Policy
  "/frequently-asked-questions", // FAQs
  "/shipping-policy", // Shipping Policy
  "/a5-photo-books", // A5 Photo Books
  "/a4-photo-books", // A4 Photo Books
  "/reasons-to-buy", // Reasons to Buy
  "/blogs", // Blogs Landing Page
  "/theme/wedding-photo-books", // Wedding Photo Books
  "/theme/memory-photo-books", // Memory Photo Books
];

const baseUrl = "https://fotogiraffe.vercel.app/";

export default function generateSitemap() {
  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const productUrls = categories.map((product) => ({
    url: `${baseUrl}photo-books-products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogsUrls = blogs.map((blog) => ({
    url: `${baseUrl}blog-post/${blog.URLs}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const sitemap = [...productUrls, ...staticUrls, ...blogsUrls];

  return sitemap;
}
