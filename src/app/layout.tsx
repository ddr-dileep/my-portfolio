import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
      <meta
        content="Free HTML Templates"
        name="Dileep Raloti, dileep, dileepraloti raloti ddrdileep ddr-dileep @dileep @dileepraloti"
      />
      <meta content="Dileep Raloti" name="dileep raloti" />
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
