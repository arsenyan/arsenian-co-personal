import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css"
import Header from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";

const kommuna = localFont({
  src: ".././fonts/KommunaVariable.woff2",
  variable: "--font-kommuna-serif",
});
const stratos = localFont({
  src: ".././fonts/StratosLCRegular.woff",
  variable: "--font-stratos-sans",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Artem Arsenian",
  description: "Nomadic art manager, Producer and Curator of Performative Art, Marketing/Digital media Specialist and Researcher",
};

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
        <main className="container px-4 mt-14">
          
        {children}
       </main>
      <SanityLive />
      </body>
    </html>
  );
}
