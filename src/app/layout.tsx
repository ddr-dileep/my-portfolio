import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

// import HeaderNavBar from "@/components/navbar/HeaderNavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dileep-raloti.vercel.app/'),
  title: "Dileep Raloti - portfolio",
  keywords: ['Next.js', 'React', 'JavaScript', 'CSS', "Dileep Raloti", "Dileep", "dileepraloti", "raloti", "ddr dileep", "dileer raloti", "Software Development", "Web Development", "Web Developer", "dilep's portfolio",],
  authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
  publisher: 'Sebastian Markbåge',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  description:
    "Dileep Raloti - A passionate software developer dedicated to crafting solutions that resonate. I don’t just build software; I design and create meaningful experiences.😊",
  openGraph: {
    locale: 'en_US',
    type: 'website',
    url: "https://dileep-raloti.vercel.app/",
    title: "Dileep Raloti - portfolio",
    description: "A passionate software developer dedicated to crafting solutions that resonate. I don’t just build software; I design and create meaningful experiences.😊",
    images: [
      {
        url: "/image/my-image.png",
        width: 450,
        height: 450,
        alt: "Dileep Raloti Portfolio Image",
      },
    ],
  },
  robots: {
    index: true, 
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/image/my-image.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/image/my-image.png" />
        <link rel="manifest" href="/site.webmanifest" />

      </Head>
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <HeaderNavBar /> */}
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
