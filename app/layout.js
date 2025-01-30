import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/redux/provider";
import CookieBanner from "@/Components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FotoGiraffe | Transform Memories with Video Photo Books",
  description: "Transform Memorize",
  icons: {
    icon: "https://assets.fotogiraffe-assets.com/logo/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
