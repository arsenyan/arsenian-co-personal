import type { Metadata } from "next";
import localFont from "next/font/local";
import ".././globals.css";
import Header from "@/components/Header";

const kommuna = localFont({
  src: ".././fonts/KommunaRegular.woff",
  variable: "--font-kommuna-serif",
  weight: "400",
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
        <main className="container px-4">
          <Header />
        {children}
       </main>
      </body>
    </html>
  );
}
