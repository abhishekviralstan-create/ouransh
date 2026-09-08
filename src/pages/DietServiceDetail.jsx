import { Link, Navigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { conditions } from "./DietConsultation";
import ServiceCta from "../components/ServiceCta";

export default function DietServiceDetail() {
  const { slug } = useParams();
  const condition = conditions.find((item) => item.id === slug);
  if (!condition) return <Navigate to="/diet-consultation" replace />;

  const summary = condition.paras[0];
  return <Layout><Seo title={`${condition.title} Diet Consultation in Mohali | Ouransh`} description={summary} /><div className="skin-detail-page"><section className="skin-detail-hero"><div className="container-x skin-detail-grid"><div className="skin-detail-copy"><Link to="/diet-consultation" className="skin-detail-back">← All Diet Services</Link><span className="eyebrow">Personalised Nutrition</span><h1>{condition.title}</h1><p>{summary}</p><div className="skin-detail-actions"><Link to="/contact?service=diet" className="btn-gold">Book Consultation →</Link><a href="tel:+916239557417" className="btn-outline">Call 062395 57417</a></div></div><aside className="hair-detail-highlight"><span>Ouransh Nutrition</span><h2>Built around your life</h2><p>Practical nutrition plans based on your health, routine and everyday food.</p></aside></div></section><section className="skin-detail-content"><div className="container-x"><article><span className="eyebrow">About the service</span><h2>Nutrition support that fits</h2>{condition.paras.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="skin-detail-note">✦ {condition.note}</div></article><aside><h3>What To Expect</h3><p>Your plan begins with a detailed assessment rather than a generic diet chart.</p><ul><li>Medical-history review</li><li>Routine-based meal planning</li><li>Practical household foods</li><li>Follow-up adjustments</li></ul><Link to="/contact?service=diet">Book nutrition support →</Link></aside></div></section><ServiceCta eyebrow="Practical nutrition, personalised for you" title={`Ready to get support for ${condition.title}?`} copy="Start with a detailed consultation and receive clear, realistic nutrition guidance built around your health and daily routine." service="diet" buttonLabel="Book a Nutrition Consultation" /></div></Layout>;
}
