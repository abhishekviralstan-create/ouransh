import { Link, Navigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import ServiceCta from "../components/ServiceCta";
import ServiceLandingHero from "../components/ServiceLandingHero";
import Faq from "../components/Faq";
import Testimonials from "../components/Testimonials";

// oxlint-disable-next-line react/only-export-components -- shared with the hair hub route
export const hairServices = {
  "gfc-treatment": {
    img: "/Subservices/GFC-Treatment.jpg",
    title: "GFC Hair Treatment in Mohali for Selected Hair-Fall Concerns",
    shortTitle: "GFC Treatment",
    metaTitle: "GFC Hair Treatment in Mohali | Ouransh",
    metaDescription: "Explore GFC hair treatment at Ouransh Mohali — a growth-factor concentrate scalp treatment for selected hair-fall concerns, planned after assessment.",
    summary: "Growth Factor Concentrate treatment designed to support weakened hair follicles and improve hair density in suitable cases.",
    details: [
      "GFC (Growth Factor Concentrate) uses a specially prepared concentrate derived from your own blood. It is applied to the scalp to deliver growth factors directly around weakened follicles, and is considered for selected patterns of hair thinning rather than every type of hair loss.",
      "The number and spacing of sessions depend on your scalp condition, pattern of hair loss and underlying cause. Nutritional deficiencies, thyroid concerns and PCOS should be assessed alongside treatment, since GFC works best when contributing factors are addressed at the same time.",
      "Because the concentrate is prepared from your own blood, there is no compatibility concern. Your provider explains the preparation process, expected sensation and aftercare before your first session.",
    ],
    helps: [
      "Selected patterns of diffuse thinning with active follicles",
      "Supporting overall scalp and follicle health",
      "Slowing further shedding as part of a personalised plan",
    ],
    note: "A consultation is required to confirm whether GFC is suitable for your pattern of hair loss. It is not a substitute for medical evaluation of underlying causes.",
    faqs: [
      { q: "Is GFC suitable for every type of hair loss?", a: "No. GFC is considered for selected patterns of thinning where follicles are still active. Suitability is assessed by our team before treatment." },
      { q: "How is GFC different from PRP?", a: "Both are prepared from your own blood, but the preparation process and final concentrate differ. We explain the exact protocol and why one option may be suggested over the other." },
      { q: "How many GFC sessions will I need?", a: "It depends on your scalp condition, pattern of hair loss and response. A personalised schedule is confirmed after assessment." },
      { q: "How soon will I see results?", a: "Hair growth cycles are slow, so change is usually assessed over months rather than weeks. Results vary by individual." },
    ],
    reviews: [
      { name: "Harpreet Singh", text: "My hairline thinning had me worried but they were clear that GFC works for specific patterns and assessed mine first. Shedding has visibly reduced after a few sessions." },
      { name: "Sanya Gill", text: "Liked that they looked at my ferritin and thyroid levels before recommending GFC instead of jumping straight to treatment. Feels like a proper plan, not just a procedure." },
      { name: "Yuvraj Sethi", text: "Painless process since it's from your own blood, and the scalp feels healthier already. Honest about the timeline too." },
    ],
  },
  "prp-therapy": {
    img: "/Subservices/PRP%20therapy.jpg",
    title: "PRP Hair Therapy in Mohali for Selected Hair-Loss Patterns",
    shortTitle: "PRP Therapy",
    metaTitle: "PRP Hair Treatment in Mohali | Ouransh",
    metaDescription: "PRP hair therapy at Ouransh Mohali for selected hair-loss patterns, prepared from your own blood and planned alongside cause-first assessment.",
    summary: "Platelet-Rich Plasma therapy for diffuse thinning and reduced hair density where active follicles remain.",
    details: [
      "PRP (Platelet-Rich Plasma) therapy uses a concentrated preparation from your own blood, applied to the scalp to support hair follicle activity by delivering growth factors directly to the treatment area. It is most commonly used for diffuse thinning and reduced hair density rather than areas with no remaining follicles.",
      "PRP is done as a course of sessions spaced several weeks apart, with maintenance sessions afterwards. Because it uses your own blood, there is no compatibility concern, though suitability still needs to be assessed individually.",
      "PRP works best when the underlying cause is corrected at the same time. Low iron, vitamin deficiencies, thyroid imbalance or hormonal concerns should be assessed alongside treatment rather than ignored.",
    ],
    helps: [
      "Diffuse thinning with follicles still active",
      "Reduced hair density and volume",
      "Supporting scalp health as part of a broader plan",
    ],
    note: "PRP cannot restore hair in areas where follicles are no longer active. Suitability is assessed by a qualified professional before treatment begins.",
    faqs: [
      { q: "Is PRP suitable for every type of hair loss?", a: "No. PRP may be considered for selected patterns of hair loss, but it is not appropriate or effective for every cause. Suitability is assessed individually." },
      { q: "How quickly will I see results?", a: "Hair growth cycles are slow, so any change is typically assessed over time rather than in days. Results vary and are not guaranteed." },
      { q: "Can nutrition affect how well PRP works?", a: "Yes. Nutritional deficiencies can limit results, which is why we assess diet and relevant blood markers alongside treatment." },
      { q: "How many PRP sessions are needed?", a: "PRP is generally planned as a course of sessions with maintenance afterwards. The exact schedule depends on your scalp and response." },
    ],
    reviews: [
      { name: "Ramanpreet Kaur", text: "Post-pregnancy hair fall was scaring me and PRP alongside nutrition correction has made a real difference in just a few months." },
      { name: "Devansh Malhotra", text: "They explained PRP wouldn't work if my iron levels stayed low, so they fixed that first. Density has genuinely improved since." },
      { name: "Anjali Dutta", text: "Course of sessions was well spaced out and they kept checking my scalp condition throughout. Thinning has noticeably slowed down." },
    ],
  },
  "hair-fall-causes": {
    img: "/Subservices/hair%20fall%20causes.avif",
    title: "Hair Fall Causes: Why Am I Losing More Hair?",
    shortTitle: "Hair Fall Causes",
    metaTitle: "Hair Fall Causes in Mohali | Assessment | Ouransh",
    metaDescription: "Understand common hair fall causes and get a cause-first hair and scalp assessment at Ouransh in Mohali before choosing a treatment.",
    summary: "A cause-first assessment for ongoing shedding, thinning hair and changes in scalp health.",
    details: [
      "Hair shedding can be influenced by genetics, stress, nutritional status, hormonal changes, illness, medications, scalp conditions and hair-care practices. Choosing a procedure before understanding the pattern of hair loss can lead to unrealistic expectations.",
      "Common contributing factors we see include low iron or ferritin, post-pregnancy shedding, thyroid conditions, PCOS, B12 and vitamin D deficiency, rapid weight loss and scalp conditions such as dandruff or seborrheic dermatitis.",
      "Your consultation reviews medical history, diet, medication, recent illness, pregnancy, stress and sleep. Relevant blood tests may be recommended before a treatment plan is selected, so you are not spending on procedures that do not match the underlying cause.",
    ],
    helps: [
      "Identifying likely contributing factors behind your hair fall",
      "Deciding whether blood tests or medical referral are needed first",
      "Building a plan that treats scalp and internal causes together",
    ],
    note: "Sudden, patchy, rapidly worsening hair loss, scalp inflammation, scarring, pain or hair loss with other symptoms deserves medical evaluation, and we will refer you when appropriate.",
    faqs: [
      { q: "How much hair fall is normal?", a: "Losing 50 to 100 strands a day is normal. Handfuls in the shower, visible scalp, or a noticeably thinner ponytail are worth investigating." },
      { q: "Will my hair grow back?", a: "It depends on the cause. Deficiency-related and post-pregnancy hair loss usually recover well once corrected. Long-standing pattern hair loss is a different picture, and we will be honest about which one you have." },
      { q: "Do I need blood tests?", a: "Often, yes. Ferritin, B12, vitamin D and thyroid function tell us more in one report than months of guessing. Bring any recent reports to your first visit." },
      { q: "My hair started falling after I lost weight. Is that connected?", a: "Almost certainly. Rapid weight loss commonly triggers shedding two to three months afterwards, and it usually recovers once nutrition is properly corrected." },
      { q: "When should hair loss be medically assessed?", a: "Sudden, patchy, rapidly worsening hair loss, scalp inflammation, scarring, pain or hair loss associated with other symptoms deserves medical evaluation." },
    ],
    reviews: [
      { name: "Gurleen Kaur", text: "Finally someone checked my ferritin and vitamin D instead of just recommending random serums. Turns out that was the real reason behind my shedding." },
      { name: "Manav Khanna", text: "The assessment was thorough — diet, stress, sleep, everything was discussed. Felt like they actually wanted to find the cause, not just sell a treatment." },
      { name: "Simone D'Souza", text: "They caught early signs of thyroid-related hair fall and referred me for tests before recommending anything. That kind of honesty builds real trust." },
    ],
  },
};

export default function HairServiceDetail() {
  const { slug } = useParams();
  const service = hairServices[slug];
  if (!service) return <Navigate to="/hair-treatment" replace />;

  const serviceSchema = {
    "@type": "MedicalProcedure",
    name: service.shortTitle,
    description: service.summary,
    procedureType: "https://schema.org/NoninvasiveProcedure",
    bodyLocation: "Scalp",
    url: `https://ouransh.in/hair-treatment/${slug}`,
    provider: { "@type": "MedicalBusiness", name: "Ouransh Diet and Skin Care", url: "https://ouransh.in" },
  };

  return <Layout><Seo title={service.metaTitle} description={service.metaDescription} breadcrumbs={[{ name: "Home", path: "/" }, { name: "Hair Treatment", path: "/hair-treatment" }, { name: service.shortTitle }]} schema={serviceSchema} /><div className="skin-detail-page skin-detail-hair">
    <ServiceLandingHero
      eyebrow="Personalised Hair Care"
      title={service.title}
      description={service.summary}
      service="hair"
      buttonLabel="Book a Hair Consultation"
      comparisonSrc={`/before-after/${slug}.png`}
      comparisonTitle={service.shortTitle}
      features={[{ icon: "person", label: <>Cause-first<br />assessment</> }, { icon: "shield", label: <>Expert<br />consultation</> }, { icon: "leaf", label: <>Evidence-led<br />hair care</> }]}
      hideVisual
    />
    <section className="skin-detail-content"><div className="container-x"><article><span className="eyebrow">About the service</span><h2>A plan made for your hair</h2>{service.details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{service.helps && <><h3 className="font-serif text-lg text-forest mt-6 mb-2">What This Can Help With</h3><ul>{service.helps.map((item) => <li key={item}>{item}</li>)}</ul></>}<div className="skin-detail-note">✦ {service.note}</div></article><aside><h3>Before We Recommend It</h3><p>We review your hair-loss pattern, scalp health, medical history and expectations.</p><ul><li>Personalised consultation</li><li>Cause and scalp assessment</li><li>Honest treatment timelines</li><li>Aftercare guidance</li></ul><Link to="/contact?service=hair">Ask about this treatment →</Link></aside></div></section><Faq title="Frequently Asked Questions" items={service.faqs} /><Testimonials title={`What Clients Say About ${service.shortTitle}`} reviews={service.reviews} /><ServiceCta eyebrow="Stronger hair starts with the right plan" title={`Ready to discuss ${service.shortTitle}?`} copy="Book a cause-first consultation and get clear guidance based on your scalp, health history and expectations." service="hair" buttonLabel="Book a Hair Consultation" /></div></Layout>;
}
