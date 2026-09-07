import { Link, Navigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { treatments } from "./SkinTreatments";

export default function SkinServiceDetail() {
  const { slug } = useParams();
  const treatment = treatments.find((item) => item.slug === slug);
  if (!treatment) return <Navigate to="/skin-treatments" replace />;
  return <Layout><Seo title={`${treatment.shortTitle} in Mohali | Ouransh`} description={`${treatment.summary} Book a personalised consultation at Ouransh, Sector 117, Mohali.`} /><div className="skin-detail-page"><section className="skin-detail-hero"><div className="container-x skin-detail-grid"><div className="skin-detail-image"><img src={treatment.img} alt={treatment.title} /></div><div className="skin-detail-copy"><Link to="/skin-treatments" className="skin-detail-back">← All Skin Treatments</Link><span className="eyebrow">Personalised Skin Care</span><h1>{treatment.title}</h1><p>{treatment.summary}</p><div className="skin-detail-actions"><Link to={`/contact?service=${treatment.slug}`} className="btn-gold">Book Consultation →</Link><a href="tel:+916239557417" className="btn-outline">Call 062395 57417</a></div></div></div></section><section className="skin-detail-content"><div className="container-x"><article><span className="eyebrow">About the treatment</span><h2>A plan made for your skin</h2>{treatment.details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="skin-detail-note">✦ {treatment.note}</div></article><aside><h3>Before We Recommend It</h3><p>We assess your concern, skin history, current routine and expectations before suggesting any procedure.</p><ul><li>Personalised consultation</li><li>Clear treatment expectations</li><li>Aftercare guidance</li><li>No unnecessary packages</li></ul><Link to={`/contact?service=${treatment.slug}`}>Ask about this treatment →</Link></aside></div></section></div></Layout>;
}
