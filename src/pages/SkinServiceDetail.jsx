import { Link, Navigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { treatments } from "./SkinTreatments";
import ServiceCta from "../components/ServiceCta";
import ServiceLandingHero from "../components/ServiceLandingHero";
import Faq from "../components/Faq";
import Testimonials from "../components/Testimonials";

export default function SkinServiceDetail() {
  const { slug } = useParams();
  const treatment = treatments.find((item) => item.slug === slug);
  if (!treatment) return <Navigate to="/skin-treatments" replace />;
  const serviceSchema = {
    "@type": "MedicalProcedure",
    name: treatment.shortTitle,
    description: treatment.summary,
    procedureType: "https://schema.org/NoninvasiveProcedure",
    bodyLocation: "Skin",
    url: `https://ouransh.in/skin-treatments/${treatment.slug}`,
    provider: { "@type": "MedicalBusiness", name: "Ouransh Diet and Skin Care", url: "https://ouransh.in" },
  };
  return <Layout><Seo title={treatment.metaTitle || `${treatment.shortTitle} in Mohali | Ouransh`} description={treatment.metaDescription || `${treatment.summary} Book a personalised consultation at Ouransh, Sector 117, Mohali.`} breadcrumbs={[{ name: "Home", path: "/" }, { name: "Skin Treatments", path: "/skin-treatments" }, { name: treatment.shortTitle }]} schema={serviceSchema} /><div className="skin-detail-page skin-detail-skin">
    <ServiceLandingHero
      eyebrow="Personalised Skin Care"
      title={treatment.title}
      description={treatment.summary}
      service={treatment.slug}
      buttonLabel="Book a Skin Consultation"
      comparisonSrc={`/before-after/${treatment.slug}.png`}
      comparisonTitle={treatment.shortTitle}
      features={[{ icon: "person", label: <>Personalised<br />plans</> }, { icon: "shield", label: <>Expert<br />consultation</> }, { icon: "leaf", label: <>Evidence-led<br />treatment</> }]}
    />
    <section className="skin-detail-content"><div className="container-x"><article><span className="eyebrow">About the treatment</span><h2>A plan made for your skin</h2>{treatment.details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{treatment.helps && <><h3 className="font-serif text-lg text-forest mt-6 mb-2">{treatment.helpsTitle || "What This Can Help With"}</h3><ul>{treatment.helps.map((item) => <li key={item}>{item}</li>)}</ul></>}<div className="skin-detail-note">✦ {treatment.note}</div></article><aside><h3>Before We Recommend It</h3><p>We assess your concern, skin history, current routine and expectations before suggesting any procedure.</p><ul><li>Personalised consultation</li><li>Clear treatment expectations</li><li>Aftercare guidance</li><li>No unnecessary packages</li></ul><Link to={`/contact?service=${treatment.slug}`}>Ask about this treatment →</Link></aside></div></section><Faq title="Frequently Asked Questions" items={treatment.faqs} /><Testimonials title={`What Clients Say About ${treatment.shortTitle}`} reviews={treatment.reviews} /><ServiceCta eyebrow="Personalised care starts with a consultation" title={`Ready to explore ${treatment.shortTitle}?`} copy="Talk to our team about your concern, suitability and realistic treatment expectations before making a decision." service={treatment.slug} buttonLabel="Book a Skin Consultation" /></div></Layout>;
}
