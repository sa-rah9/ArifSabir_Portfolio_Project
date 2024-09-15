import { Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import PageTransition from "../components/PageTransition";
import StairTransition from "../components/StairTransition";
import Footer from "../components/Footer";

// Use correct font name
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-dancing-script', // Custom font variable
});

export const metadata = {
  title: "Arif Sabir - Worshiper", // Update title for SEO
  description: "Explore Arif Sabir's devotion, spiritual journey, and creative expressions as a worshiper.", // Updated description for SEO
  keywords: "Arif Sabir, worshiper, spiritual journey, devotional works, worship, spirituality, portfolio", // Add relevant keywords for SEO
  openGraph: {
    title: 'Arif Sabir - Worshiper & Spiritual Journey',
    description: 'Discover the devotional and spiritual works of Arif Sabir, a worshiper committed to spreading enlightenment.',
    type: 'website',
    url: 'https://www.worshiper-arifsabir.com/',
    images: [
      {
        url: 'https://i0.wp.com/www.evertonparkchurch.com.au/wp-content/uploads/2016/01/1601-Worshipping_God_B_web.jpg?w=1153&ssl=1',
        width: 800,
        height: 600,
        alt: 'Arif Sabir Worshiper Portfolio',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags for SEO */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Arif Sabir",
              url: "https://www.worshiper-arifsabir.com/",
              sameAs: [
                "https://www.youtube.com/@arifsabirworshipper5010",
                "https://web.facebook.com/arif.sabir1",
              ],
              jobTitle: "Worshiper",
              description: "A worshiper dedicated to spiritual growth and devotion.",
              worksFor: {
                "@type": "Organization",
                name: "Self",
              },
            }),
          }}
        />
      </head>
      <body className={`${dancingScript.variable} antialiased`}>
        <Header />

        {/* Use main and article for semantic structure */}
        <main>
          <StairTransition>{children}</StairTransition>
          <PageTransition>{children}</PageTransition>
        </main>

        <Footer />
      </body>
    </html>
  );
}
