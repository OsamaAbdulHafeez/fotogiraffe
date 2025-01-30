import { Geist, Geist_Mono } from "next/font/google";

export const metadata = {
  title: "FotoGiraffe | Create Photo Books With Videos in Minutes",
  description: "Photo Books With Videos",
  icons: {
    icon: "https://assets.fotogiraffe-assets.com/logo/favicon.png",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
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
