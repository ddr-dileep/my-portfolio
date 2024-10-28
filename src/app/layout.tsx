import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./styles.css";
import "./globals.scss";

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
        name="Dilee Raloti, dileep, dileepraloti raloti ddrdileep ddr-dileep @dilee @dileepraloti"
      />
      <link href="img/favicon.ico" rel="icon" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
        rel="stylesheet"
      />

      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        rel="stylesheet"
      />

      <link
        href="lib/owlcarousel/assets/owl.carousel.min.css"
        rel="stylesheet"
      />
      <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
      <meta content="Dilee Raloti" name="description" />
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
