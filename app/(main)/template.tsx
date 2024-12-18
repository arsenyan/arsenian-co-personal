import { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SanityLive } from "@/sanity/lib/live";
import { Analytics } from "@vercel/analytics/next";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import { DisableDraftMode } from "@/components/DisableDraftMode";

export const metadata: Metadata = {
  metadataBase: new URL("https://arsenian.co"),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: '/api/og',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
       <Header />
        <main className="container px-4 md:mt-20 mt-14">
            {children}
          </main>
        <Footer />
        
        {(await draftMode()).isEnabled && (
              <>
                <VisualEditing />
                <DisableDraftMode />
              </>
            )}
        <SanityLive />
        <Analytics />
    </>
  );
}