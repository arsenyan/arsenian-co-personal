import NotFoundTemplate from '@/components/NotFound'
import { Metadata } from 'next'

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
    <NotFoundTemplate />
  )
}