import { Link, Navigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const hairServices = {
  "gfc-treatment": {
    title: "GFC Treatment",
    summary: "Growth Factor Concentrate treatment designed to support weakened hair follicles and improve hair density in suitable cases.",
    details: [
      "GFC uses a specially prepared concentrate derived from your own blood. It is applied to the scalp to deliver growth factors directly around weakened follicles.",
      "The number and spacing of sessions depend on your scalp condition, pattern of hair loss and underlying cause. Nutritional deficiencies, thyroid concerns and PCOS should be assessed alongside treatment.",
    ],
    note: "A consultation is required to confirm whether GFC is suitable for your pattern of hair loss.",
  },
  "prp-therapy": {
    title: "PRP Therapy",
    summary: "Platelet-Rich Plasma therapy for diffuse thinning and reduced hair density where active follicles remain.",
    details: [
      "PRP uses a concentrated preparation from your own blood, applied to the scalp to support hair follicle activity. It is generally planned as a course of sessions followed by maintenance where appropriate.",
      "PRP works best when contributing causes such as low iron, vitamin deficiencies, thyroid imbalance or hormonal concerns are corrected at the same time.",
    ],
    note: "PRP cannot restore hair in areas where follicles are no longer active.",
  },
  "hair-fall-causes": {
    title: "Hair Fall Causes & Assessment",
    summary: "A cause-first assessment for ongoing shedding, thinning hair and changes in scalp health.",
    details: [
      "Hair fall may be linked to low iron or ferritin, thyroid conditions, PCOS, vitamin deficiencies, pregnancy, rapid weight loss, stress or scalp conditions.",
      "Your consultation reviews medical history, diet, medication, recent illness, pregnancy, stress and sleep. Relevant blood tests may be recommended before a treatment plan is selected.",
    ],
    note: "Finding the cause first helps avoid spending on treatments that do not match the problem.",
  },
};

export default function HairServiceDetail() {
  const { slug } = useParams();
  const service = hairServices[slug];
  if (!service) return <Navigate to="/hair-treatment" replace />;

  return <Layout><Seo title={`${service.title} in Mohali | Ouransh`} description={service.summary} /><div className="skin-detail-page"><section className="skin-detail-hero"><div className="container-x skin-detail-grid"><div className="skin-detail-copy"><Link to="/hair-treatment" className="skin-detail-back">← All Hair Treatments</Link><span className="eyebrow">Personalised Hair Care</span><h1>{service.title}</h1><p>{service.summary}</p><div className="skin-detail-actions"><Link to="/contact?service=hair" className="btn-gold">Book Consultation →</Link><a href="tel:+916239557417" className="btn-outline">Call 062395 57417</a></div></div><aside className="hair-detail-highlight"><span>Ouransh Hair Care</span><h2>Cause-first treatment</h2><p>We assess your scalp and internal health before recommending sessions.</p></aside></div></section><section className="skin-detail-content"><div className="container-x"><article><span className="eyebrow">About the service</span><h2>A plan made for your hair</h2>{service.details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="skin-detail-note">✦ {service.note}</div></article><aside><h3>Before We Recommend It</h3><p>We review your hair-loss pattern, scalp health, medical history and expectations.</p><ul><li>Personalised consultation</li><li>Cause and scalp assessment</li><li>Honest treatment timelines</li><li>Aftercare guidance</li></ul><Link to="/contact?service=hair">Ask about this treatment →</Link></aside></div></section></div></Layout>;
}
