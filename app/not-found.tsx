import NotFoundTemplate from '@/components/NotFound'
import { Metadata } from 'next'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL("https://arsenian.co"),
  title: '404. not found',
  description: 'the page you are looking for does not exist.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: '/api/og',
  },
};
 
export default function NotFound() {
  return (
    <><Header />
    <div className="container px-4 md:mt-20 mt-14">
    <NotFoundTemplate /></div><Footer /></>
  )
}