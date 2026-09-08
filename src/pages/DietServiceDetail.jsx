import { Link, Navigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { conditions } from "./DietConsultation";
import ServiceCta from "../components/ServiceCta";
import ServiceLandingHero from "../components/ServiceLandingHero";
import Faq from "../components/Faq";
import Testimonials from "../components/Testimonials";

export default function DietServiceDetail() {
  const { slug } = useParams();
  const condition = conditions.find((item) => item.id === slug);
  if (!condition) return <Navigate to="/diet-consultation" replace />;

  const summary = condition.paras[0];
  const serviceSchema = {
    "@type": "MedicalTherapy",
    name: `${condition.shortTitle} Nutrition Support`,
    description: summary,
    url: `https://ouransh.in/diet-consultation/${condition.id}`,
    provider: { "@type": "MedicalBusiness", name: "Ouransh Diet and Skin Care", url: "https://ouransh.in" },
  };
  return <Layout><Seo title={condition.metaTitle || `${condition.shortTitle} Diet Consultation in Mohali | Ouransh`} description={condition.metaDescription || summary} breadcrumbs={[{ name: "Home", path: "/" }, { name: "Diet & Nutrition", path: "/diet-consultation" }, { name: condition.shortTitle }]} schema={serviceSchema} /><div className="skin-detail-page skin-detail-diet">
    <ServiceLandingHero
      eyebrow="Personalised Nutrition"
      title={condition.title}
      description={summary}
      service="diet"
      buttonLabel="Book a Nutrition Consultation"
      comparisonSrc={`/before-after/diet-${condition.id}.png`}
      comparisonTitle={condition.shortTitle}
      features={[{ icon: "person", label: <>Personalised<br />plans</> }, { icon: "shield", label: <>Health-aware<br />guidance</> }, { icon: "leaf", label: <>Practical<br />nutrition</> }]}
    />
    <section className="skin-detail-content"><div className="container-x"><article><span className="eyebrow">About the service</span><h2>Nutrition support that fits</h2>{condition.paras.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{condition.helps && <><h3 className="font-serif text-lg text-forest mt-6 mb-2">What This Can Help With</h3><ul>{condition.helps.map((item) => <li key={item}>{item}</li>)}</ul></>}<div className="skin-detail-note">✦ {condition.note}</div></article><aside><h3>What To Expect</h3><p>Your plan begins with a detailed assessment rather than a generic diet chart.</p><ul><li>Medical-history review</li><li>Routine-based meal planning</li><li>Practical household foods</li><li>Follow-up adjustments</li></ul><Link to="/contact?service=diet">Book nutrition support →</Link></aside></div></section><Faq title="Frequently Asked Questions" items={condition.faqs} /><Testimonials title={`What Clients Say About ${condition.shortTitle} Support`} reviews={condition.reviews} /><ServiceCta eyebrow="Practical nutrition, personalised for you" title={`Ready to get support for ${condition.shortTitle}?`} copy="Start with a detailed consultation and receive clear, realistic nutrition guidance built around your health and daily routine." service="diet" buttonLabel="Book a Nutrition Consultation" /></div></Layout>;
}
