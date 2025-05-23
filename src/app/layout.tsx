import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import { FlotingNavbar } from "./component/FlotingNavbar";
import CustomCursor from "./component/courser";
import Script from "next/script"; // 👈 Add this

// Load Google Font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

// Metadata for Next.js
export const metadata: Metadata = {
  title: "Taha Najam - Freelance Graphic Designer - UK & USA",
  description:
    "Premium design services for clients in the UK, USA, and beyond.",
  icons: "/images/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteURL = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <html lang="en">
      <head>
        {/* Open Graph Meta */}
        <meta
          property="og:title"
          content="Taha Najam - Freelance Graphic Designer - UK & USA"
        />
        <meta
          property="og:description"
          content="Premium design services for clients in the UK, USA, and beyond."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteURL} />
        <meta property="og:image" content={`${siteURL}/images/og-image.png`} />

        {/* Twitter Card Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Taha Najam - Freelance Graphic Designer - UK & USA"
        />
        <meta
          name="twitter:description"
          content="Premium design services for clients in the UK, USA, and beyond."
        />
        <meta name="twitter:image" content={`${siteURL}/images/og-image.png`} />

        {/* Optional Extras */}
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body className={`${poppins.variable} antialiased cursor-none`}>
        {/* 👉 Google Analytics Scripts */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-LHXYX6WED2"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LHXYX6WED2');
            `,
          }}
        />

        <CustomCursor />
        <Navbar />
        <FlotingNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
