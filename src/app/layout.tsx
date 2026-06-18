import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thediyedge.com'),
  title: {
    default: 'TheDIYEdge — Home Improvement Guides, Costs & DIY Tips',
    template: '%s | TheDIYEdge',
  },
  description: 'TheDIYEdge helps homeowners tackle home improvement projects with confidence. Get accurate 2026 cost estimates, product reviews, and step-by-step DIY guides.',
  keywords: ['home improvement', 'DIY', 'kitchen remodel cost', 'bathroom renovation', 'deck cost', 'home renovation guide'],
  authors: [{ name: 'TheDIYEdge Editorial Team' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'TheDIYEdge',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@TheDIYEdge',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* GTM-XXXXXXX — Replace with your actual GTM container ID */}
        {/* <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXXX');` }} /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="flex flex-col min-h-screen">
        {/* GTM noscript — Replace GTM-XXXXXXX with actual container ID */}
        {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript> */}
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
