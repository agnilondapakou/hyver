import { Helmet } from 'react-helmet';

interface PageTitleProps {
  title: string;
  image?: string;
}

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <Helmet>
      <title>{title}</title>
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content="/twitter-card.png" />
    </Helmet>
  );
} 