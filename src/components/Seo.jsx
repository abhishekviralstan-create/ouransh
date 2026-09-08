import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://ouransh.in";
const DEFAULT_KEYWORDS = "Ouransh, skin clinic Mohali, hair treatment Mohali, dietitian Mohali, aesthetic clinic Sector 117, Tricity skin and hair care";

export default function Seo({ title, description, image = "/og-image.png", breadcrumbs, keywords, noindex, schema: extraSchema }) {
  const { pathname } = useLocation();
  const cleanPath = pathname.length > 1 ? pathname.replace(/\/+$/, "") : "";
  const canonical = `${SITE_URL}${cleanPath}`;
  const socialImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  const keywordsContent = Array.isArray(keywords) ? keywords.join(", ") : keywords || DEFAULT_KEYWORDS;

  const schema = {
    "@context": "https://schema.org", "@type": ["HealthAndBeautyBusiness", "MedicalBusiness"],
    name: "Ouransh Diet and Skin Care", url: SITE_URL, logo: `${SITE_URL}/Ouransh_Logo.png`, image: socialImage,
    telephone: "+91-62395-57417", priceRange: "₹₹",
    address: { "@type": "PostalAddress", streetAddress: "SCO 451 FT, TDI South Ex-2, Sector 117", addressLocality: "Sahibzada Ajit Singh Nagar", addressRegion: "Punjab", postalCode: "140301", addressCountry: "IN" },
    openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "11:00", closes: "20:00" }],
  };

  const breadcrumbSchema = breadcrumbs?.length ? {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, i) => ({
      "@type": "ListItem", position: i + 1, name: crumb.name,
      item: crumb.path ? `${SITE_URL}${crumb.path}` : undefined,
    })),
  } : null;

  const extraSchemas = extraSchema ? (Array.isArray(extraSchema) ? extraSchema : [extraSchema]) : [];

  return <Helmet>
    <html lang="en-IN" />
    <title>{title}</title><meta name="description" content={description} />
    <meta name="keywords" content={keywordsContent} />
    <meta name="author" content="Ouransh Diet and Skin Care" />
    <meta name="publisher" content="Ouransh Diet and Skin Care" />
    <meta name="robots" content={noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
    <meta name="googlebot" content={noindex ? "noindex, follow" : "index, follow"} />
    <meta name="geo.region" content="IN-PB" /><meta name="geo.placename" content="Mohali" /><meta name="ICBM" content="30.6989,76.7192" />
    <link rel="canonical" href={canonical} />
    <link rel="publisher" href="https://www.facebook.com/p/Ouransh-61589984794594/" />
    <meta property="og:type" content="website" /><meta property="og:site_name" content="Ouransh Diet and Skin Care" /><meta property="og:locale" content="en_IN" />
    <meta property="og:title" content={title} /><meta property="og:description" content={description} /><meta property="og:url" content={canonical} />
    <meta property="og:image" content={socialImage} /><meta property="og:image:type" content="image/png" /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" /><meta property="og:image:alt" content={title} />
    <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content={title} /><meta name="twitter:description" content={description} /><meta name="twitter:image" content={socialImage} />
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
    {breadcrumbSchema && <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>}
    {extraSchemas.map((s, i) => <script key={i} type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", ...s })}</script>)}
  </Helmet>;
}
