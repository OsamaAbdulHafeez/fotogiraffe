import { Geist, Geist_Mono } from "next/font/google";

export const metadata = {
  title: "FotoGiraffe | Cherish Memories with a Family Photo Album ",
  description: "Memories Come Alive",
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
