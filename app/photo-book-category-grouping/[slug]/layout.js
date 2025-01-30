import { blogs } from "@/data/blogs";
import { categories } from "@/data/categories";
import { sizeBasedCategoryGroupings } from "@/data/sizebasedCategory";
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
  // Ensure params is properly awaited before using
  const { slug } = await params;
  if (!params || !slug) {
    return {
      title: "Invalid Size",
    };
  }

  const findSize = sizeBasedCategoryGroupings.find(size => size.sizes === slug)

  if (!findSize) {
    // Return default metadata if no matching book is found
    return {
      title: "Size Not Found",
    };
  }

  // Define metadata dynamically based on the slug
  return {
    title: `${findSize?.groupingName}`,
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
