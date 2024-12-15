import localFont from "next/font/local";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SanityLive } from "@/sanity/lib/live";
import { Analytics } from "@vercel/analytics/next";

const kommuna = localFont({
  src: ".././fonts/KommunaVariable.woff2",
  variable: "--font-kommuna-serif",
});
const stratos = localFont({
  src: ".././fonts/StratosLCRegular.woff",
  variable: "--font-stratos-sans",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kommuna.variable} ${stratos.variable} antialiased`}
      >
        <Header />
        <main className="container px-4 md:mt-20 mt-14">
          {children} <SanityLive />
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
