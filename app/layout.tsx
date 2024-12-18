import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  metadataBase: new URL("https://arsenian.co"),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: '/api/og',
  },
};

const kommuna = localFont({
  src: "./fonts/KommunaNormal1.10.woff",
  variable: "--font-kommuna-serif",
  weight: "400",
});
const stratos = localFont({
  src: "./fonts/StratosLCRegular.woff",
  variable: "--font-stratos-sans",
  weight: "400",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
    <html lang="en">
      <body className={`${kommuna.variable} ${stratos.variable} antialiased`}>
            {children}
      </body>
    </html>
    </ViewTransitions>
  );
}