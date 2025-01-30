import { blogs } from "@/data/blogs";
import { categories } from "@/data/categories";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }) {
  const { slug } = await params;
  // Ensure params is properly awaited before using
  if (!params || !slug) {
    return {
      title: "Invalid Blog",
    };
  }

  const findBlog = blogs.find(blog => blog.URLs === slug)

  if (!findBlog) {
    // Return default metadata if no matching book is found
    return {
      title: "Blog Not Found",
    };
  }

  // Define metadata dynamically based on the slug
  return {
    title: `${findBlog?.headline?.text1}`,
  };
}

export default function RootLayout({ children, params }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
