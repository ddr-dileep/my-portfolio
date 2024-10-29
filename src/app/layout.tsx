import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderNavBar from "@/components/navbar/HeaderNavBar";
import Head from "next/head";

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
  title: "Dileep Raloti - Homepage",
  description: "Dileep Raloti portfolio - Homepage",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* <title>{metadata?.title || "Default Title"}</title> */}
        <meta
          name="description"
          content={
            metadata?.description ||
            "Dileep Raloti dileepraloti dileep-raloti raloti ddr-dileep ddrdileep"
          }
        />
        <meta
          content="Free HTML Templates"
          name="Dileep Raloti, dileep, dileepraloti raloti ddrdileep ddr-dileep @dileep @dileepraloti"
        />
        <meta content="Dileep Raloti" name="dileep raloti" />
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <meta property="og:image" content="./favicon.ico" />
        <meta
          property="og:image:alt"
          content="Dileep Raloti Portfolio - A passionate soft developer, i build not only software just design and build the feelings 😊"
        />
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
