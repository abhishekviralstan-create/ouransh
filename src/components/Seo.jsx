import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://ouransh.com";

export default function Seo({ title, description, image = "/Ouransh_Logo.png" }) {
  const { pathname } = useLocation();
  const canonical = `${SITE_URL}${pathname === "/" ? "" : pathname}`;
  const socialImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  const schema = {
    "@context": "https://schema.org", "@type": ["HealthAndBeautyBusiness", "MedicalBusiness"],
    name: "Ouransh Diet and Skin Care", url: SITE_URL, logo: `${SITE_URL}/Ouransh_Logo.png`, image: socialImage,
    telephone: "+91-62395-57417", priceRange: "₹₹",
    address: { "@type": "PostalAddress", streetAddress: "SCO 451 FF, TDI South Ex-2, Sector 117", addressLocality: "Mohali", addressRegion: "Punjab", postalCode: "140301", addressCountry: "IN" },
    openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "11:00", closes: "20:00" }],
  };
  return <Helmet>
    <title>{title}</title><meta name="description" content={description} />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <link rel="canonical" href={canonical} />
    <meta property="og:type" content="website" /><meta property="og:site_name" content="Ouransh Diet and Skin Care" /><meta property="og:locale" content="en_IN" />
    <meta property="og:title" content={title} /><meta property="og:description" content={description} /><meta property="og:url" content={canonical} /><meta property="og:image" content={socialImage} />
    <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content={title} /><meta name="twitter:description" content={description} /><meta name="twitter:image" content={socialImage} />
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  </Helmet>;
}
