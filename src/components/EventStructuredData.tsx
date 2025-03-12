import { Helmet } from 'react-helmet-async';

interface EventStructuredDataProps {
  name: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  image: string;
  url: string;
}

export default function EventStructuredData({
  name,
  startDate,
  endDate,
  location,
  description,
  image,
  url
}: EventStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name,
    startDate,
    endDate,
    location: {
      "@type": "Place",
      name: location
    },
    description,
    image,
    url,
    organizer: {
      "@type": "Organization",
      name: "Hyver",
      url: "https://hyver.org"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
} 