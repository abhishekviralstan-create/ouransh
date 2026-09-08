import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import ServiceCta from "../components/ServiceCta";
import Faq from "../components/Faq";

function FeatureIcon({ type }) {
  if (type === "person") return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7" r="3.5"/><path d="M5.5 20v-2.5a6.5 6.5 0 0 1 13 0V20z"/></svg>;
  if (type === "shield") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5 19 5v5.5c0 4.8-2.8 8.7-7 11-4.2-2.3-7-6.2-7-11V5z"/><path d="m9 12 2 2 4-4"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4C11 4 5 8.5 5 15c0 2.5 1.7 4 4 4 6.5 0 10-6 11-15Z"/><path d="M4 21c3.5-6 7.5-9.5 12-12"/></svg>;
}

// oxlint-disable-next-line react/only-export-components -- shared with the matching detail route
export const treatments = [
  {
    slug: "hifu",
    title: "HIFU Treatment in Mohali for Firmer, Lifted-Looking Skin",
    shortTitle: "HIFU",
    metaTitle: "HIFU Treatment in Mohali | Skin Tightening | Ouransh",
    metaDescription: "Explore HIFU skin tightening at Ouransh in Mohali for a firmer, more lifted-looking appearance. Personalised consultation for Mohali and the Tricity.",
    img: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=900&auto=format&fit=crop",
    summary: "Focused ultrasound-based skin tightening for a firmer, more lifted-looking appearance.",
    details: [
      "HIFU stands for high-intensity focused ultrasound. The technology delivers focused ultrasound energy beneath the skin surface at selected depths. The controlled thermal effect is intended to trigger a natural repair response and support new collagen formation over time.",
      "Unlike a surgical facelift, HIFU does not remove excess skin or create surgical-level lifting. It is best understood as a non-surgical skin-tightening option for suitable clients who want gradual, natural-looking improvement rather than an instant transformation.",
      "Your visit begins with a consultation and assessment. We review your concern, examine the treatment area, discuss medical history and explain what HIFU can and cannot realistically achieve before any energy is delivered.",
    ],
    helps: [
      "Mild to moderate loss of firmness around the jawline and lower face",
      "The appearance of softer facial contours or early skin laxity",
      "Neck or under-chin skin firmness, where appropriate for the device and individual",
      "Overall support for a firmer, more refreshed-looking appearance",
    ],
    note: "Results develop gradually as collagen remodels over the following weeks and months. We will tell you honestly whether HIFU is suitable for your skin and expectations, and recommend a session plan only after assessment.",
    faqs: [
      { q: "Is HIFU the same as a facelift?", a: "No. HIFU is a non-surgical aesthetic procedure. It cannot remove excess skin or reproduce the degree of change possible with surgery." },
      { q: "How long do HIFU results last?", a: "Longevity varies because skin ageing continues. Individual response, age, lifestyle and treatment protocol all influence how long the visible improvement is maintained." },
      { q: "Is there downtime after HIFU?", a: "Many clients return to routine activities quickly, but temporary redness, tenderness, swelling or tingling can occur." },
      { q: "How many HIFU sessions do I need?", a: "There is no single number for everyone. We recommend a plan after examining the treatment area and discussing your goals." },
      { q: "Can HIFU be combined with other skin treatments?", a: "Sometimes, but the sequence and spacing should be planned by a qualified provider to avoid unnecessary irritation or conflicting timing." },
    ],
    reviews: [
      { name: "Priya Malhotra", text: "My jawline was starting to lose its shape and I didn't want anything surgical. Ouransh explained exactly what HIFU could and couldn't do before I started, and the gradual tightening over two months has been exactly what they promised." },
      { name: "Rohan Kapoor", text: "Honest consultation before anything else. They didn't push me into extra sessions and the improvement around my jaw and neck looks completely natural." },
      { name: "Simran Kaur", text: "No downtime, mild warmth during the session, and visible firmness by the second month. Genuinely glad I chose Ouransh in Mohali for this." },
    ],
  },
  {
    slug: "rf-skin-tightening",
    title: "RF Skin Tightening in Mohali for Smoother, Firmer-Looking Skin",
    shortTitle: "RF Skin Tightening",
    metaTitle: "RF Skin Tightening in Mohali | Ouransh Skin Clinic",
    metaDescription: "Discover radiofrequency skin tightening at Ouransh, Mohali. A personalised option for improving the look of firmness, texture and facial contours.",
    img: "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?q=80&w=900&auto=format&fit=crop",
    summary: "Radiofrequency-based care designed to improve the look of skin firmness and texture.",
    details: [
      "Radiofrequency, commonly shortened to RF, is an energy-based aesthetic technology used to heat selected layers of skin in a controlled way. That warmth can support the skin's natural collagen and elastin remodelling process, which may improve the appearance of firmness and texture over time.",
      "After a consultation, we clean and prepare the area and move the RF applicator according to the device protocol. Most RF systems create a warming sensation; treatment should feel controlled rather than excessively hot, and we monitor your comfort throughout.",
      "RF results are not identical for every person. A series of sessions may be recommended depending on the device, treatment area and degree of skin laxity, with visible change developing gradually as collagen remodelling occurs.",
    ],
    helps: [
      "Early loss of facial or neck firmness",
      "Uneven-looking skin texture",
      "A desire for gradual, non-surgical rejuvenation",
      "Maintenance-focused skin care as part of a longer-term aesthetic plan",
    ],
    note: "Your recommended schedule is confirmed after skin assessment rather than promised as a fixed number of sessions. Temporary warmth, redness or mild sensitivity can occur after treatment.",
    faqs: [
      { q: "Does RF skin tightening hurt?", a: "Most systems are designed to create controlled warmth. Comfort varies, so we adjust treatment within safe device parameters." },
      { q: "Is RF skin tightening non-surgical?", a: "Yes. Standard aesthetic RF skin tightening does not involve surgical incisions." },
      { q: "When do results appear?", a: "Results can be gradual because collagen remodelling takes time. We explain the expected timeline for the device and area being treated." },
      { q: "How many RF sessions are recommended?", a: "It depends on the technology, area, skin condition and goals. A personalised schedule is more appropriate than a universal session count." },
      { q: "Is RF suitable for everyone?", a: "No aesthetic procedure is suitable for everyone. Medical history, implants, pregnancy status, active skin issues and prior procedures are discussed before treatment." },
    ],
    reviews: [
      { name: "Ananya Sharma", text: "The warming sensation was very manageable and my skin genuinely feels firmer around the cheeks and neck after a few sessions. No exaggerated claims, just steady improvement." },
      { name: "Vikram Chauhan", text: "I was skeptical about RF at first but the team explained the science clearly and set realistic expectations. Texture has visibly improved over two months." },
      { name: "Neha Bansal", text: "Comfortable sessions, no downtime, and my skin looks noticeably tighter than before. Would recommend to anyone in Mohali looking for a non-surgical option." },
    ],
  },
  {
    slug: "hydrafacial",
    title: "HydraFacial in Mohali for Clean, Hydrated, Refreshed-Looking Skin",
    shortTitle: "HydraFacial",
    metaTitle: "HydraFacial in Mohali | Deep Cleanse & Hydrate | Ouransh",
    metaDescription: "Book a HydraFacial in Mohali at Ouransh for deep cleansing, exfoliation and hydration tailored to your skin. Serving Mohali, Chandigarh and Tricity.",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=900&auto=format&fit=crop",
    summary: "A multi-step facial focused on cleansing, exfoliation, extraction and hydration.",
    details: [
      "HydraFacial is a device-assisted facial treatment that combines cleansing, exfoliation, extraction and hydration in a structured sequence. It is popular with clients who want a polished, refreshed appearance without the recovery associated with more intensive procedures.",
      "Although HydraFacial can suit many skin types, the exact protocol is adjusted to your skin. Active irritation, certain medical skin conditions or recent procedures may change what is appropriate, so a pre-treatment check still matters.",
      "Your appointment begins with a quick skin assessment, then moves through cleansing and exfoliation, gentle extraction where appropriate, and hydration-focused steps.",
    ],
    helps: [
      "Dull or tired-looking skin",
      "Visible congestion and surface buildup",
      "Dehydrated or rough-feeling skin",
      "The appearance of uneven texture",
      "A pre-event skin refresh when scheduled appropriately",
    ],
    note: "Frequency depends on your skin goals, home-care routine and whether HydraFacial is being used for occasional maintenance or as part of a broader plan. Arrive four to six weeks ahead of a wedding or event for best results.",
    faqs: [
      { q: "Is HydraFacial good for sensitive skin?", a: "It can be adapted for many skin types, but sensitive or compromised skin should be assessed first so intensity and products can be adjusted." },
      { q: "Can I get HydraFacial before a wedding or event?", a: "Yes, many clients use it as a pre-event refresh, but it is better to plan in advance rather than try any new treatment immediately before an important date." },
      { q: "Does HydraFacial remove blackheads?", a: "The extraction step may help with visible congestion, but results depend on the type and depth of the blockage. Persistent acne or comedones may need a broader plan." },
      { q: "Can HydraFacial treat acne?", a: "It may support cleansing and hydration for some acne-prone skin, but active or significant acne can require a dedicated acne plan." },
    ],
    reviews: [
      { name: "Ritu Verma", text: "Booked a HydraFacial before my sister's wedding and my skin looked so much brighter and cleaner within a week. Zero irritation and the team explained aftercare properly." },
      { name: "Karan Mehta", text: "Quick, relaxing and no downtime at all. My skin felt hydrated and smooth immediately after the first session." },
      { name: "Ishita Sood", text: "I get one every couple of months for maintenance now. Ouransh always checks my skin condition first instead of just running the same protocol every time." },
    ],
  },
  {
    slug: "laser-hair-reduction",
    title: "Laser Hair Reduction in Mohali for Face & Body",
    shortTitle: "Laser Hair Reduction",
    metaTitle: "Laser Hair Reduction in Mohali | Face & Body | Ouransh",
    metaDescription: "Reduce unwanted facial and body hair with personalised laser hair reduction at Ouransh in Mohali. Consultation-led plans for women and men across Tricity.",
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=900&auto=format&fit=crop",
    summary: "Consultation-led plans for reducing unwanted facial and body hair over a series of sessions.",
    details: [
      "Laser hair reduction uses light energy that is absorbed by pigment in the hair. The energy converts to heat and can impair the follicle's ability to produce hair. Because only a portion of hairs are in the most responsive growth phase at any one time, multiple sessions are normally needed.",
      "We select laser parameters for your individual profile — hair colour, density, skin tone, recent sun exposure and hormonal factors all affect safety and response.",
      "Follow our exact preparation instructions before each session. Methods that remove hair from the root, such as waxing or plucking, usually need to be avoided beforehand since the follicle target needs to be present.",
    ],
    helps: [
      "Upper lip, chin, sideburns and other facial areas where appropriate",
      "Underarms and arms",
      "Legs",
      "Bikini area",
      "Back, chest or abdomen",
      "Other areas after consultation and suitability assessment",
    ],
    note: "Expect significant long-term reduction rather than a promise of total permanent removal. Regrowth can occur and hormonal facial hair may need maintenance sessions.",
    faqs: [
      { q: "Is laser hair reduction permanent?", a: "It is more accurate to describe the goal as long-term hair reduction. Regrowth can occur, and some clients need maintenance sessions." },
      { q: "How many laser sessions will I need?", a: "It varies by area, hair growth cycle, density, hormones, device and individual response. Your plan is confirmed after assessment." },
      { q: "Can I wax between sessions?", a: "Usually, removing hair from the root is avoided because the follicle target needs to be present. Follow our specific preparation instructions." },
      { q: "Does laser hair reduction hurt?", a: "Most people describe brief heat, snapping or stinging sensations. Cooling and device settings affect comfort." },
      { q: "Can laser be done on darker skin tones?", a: "Many modern systems can treat a wide range of skin tones when the correct technology and settings are used; suitability is confirmed at assessment." },
    ],
    reviews: [
      { name: "Diksha Rana", text: "Started my underarm and arms sessions six months ago and the reduction is very noticeable now. The team is upfront that it's a gradual process, not a one-time fix." },
      { name: "Arjun Thakur", text: "Went for facial hair reduction and they were honest that hormonal hair needs maintenance sessions. Appreciated the transparency instead of overpromising." },
      { name: "Meera Nanda", text: "Comfortable sessions with proper cooling, and the difference after a full course has been huge. Booking again for touch-ups." },
    ],
  },
  {
    slug: "acne-correction",
    title: "Personalised Acne Correction in Mohali",
    shortTitle: "Acne Correction",
    metaTitle: "Acne Correction in Mohali | Personalised Skin Care | Ouransh",
    metaDescription: "Get a personalised acne correction plan at Ouransh in Mohali for active breakouts, marks and uneven texture. Consultation-led skin care for Tricity clients.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=900&auto=format&fit=crop",
    summary: "Personalised care for active breakouts, congestion, acne marks and texture concerns, with referral when medical assessment is needed.",
    helpsTitle: "What an Acne Consultation Should Review",
    details: [
      "Acne can appear as blackheads, whiteheads, inflamed spots, deeper painful lesions or a combination. The best plan depends on severity, skin type, previous treatments, scarring risk and possible hormonal or medical factors.",
      "Your consultation reviews where and how the acne appears, current skin-care and hair-care products, previous treatments, hormonal patterns where relevant, and any habits such as picking or friction that may worsen inflammation.",
      "Post-acne dark marks and acne scars are different concerns. Dark marks may gradually fade with sun protection and pigment-focused care, while depressed or raised scars usually need a separate assessment.",
    ],
    helps: [
      "Where and how the acne appears, and how long it has been active",
      "Current skin-care and hair-care products",
      "Previous treatments and reactions",
      "Menstrual or hormonal patterns where relevant and voluntarily discussed",
      "Picking, friction, shaving or other habits that may worsen inflammation",
      "Signs of scarring, infection or another skin condition that needs medical assessment",
    ],
    note: "Improvement takes time and active acne, marks and texture each have different timelines. Severe, painful, rapidly worsening or scarring acne is referred for medical assessment.",
    faqs: [
      { q: "Can acne be cured permanently?", a: "Acne can often be controlled effectively, but recurrence is possible, especially when hormones, genetics or other ongoing factors are involved." },
      { q: "Should I get a facial if I have active acne?", a: "It depends on the acne type and skin condition. Some facials may be too irritating, while other gentle approaches may support a broader plan." },
      { q: "What is the difference between acne marks and acne scars?", a: "Marks are usually flat colour changes after inflammation. Scars involve a change in skin texture, such as indentations or raised areas, and often need different treatment." },
      { q: "Can diet cause acne?", a: "Diet may influence acne in some people, but acne is multifactorial. A balanced approach and medical assessment are more useful than extreme restriction." },
      { q: "When should I see a dermatologist or doctor?", a: "Seek medical assessment for severe, painful, rapidly worsening or scarring acne, or if you suspect a medication or hormonal condition is contributing." },
    ],
    reviews: [
      { name: "Tanya Grover", text: "Years of trying random products and finally someone looked at the actual cause of my breakouts instead of just prescribing another cream. My skin is calmer now." },
      { name: "Aditya Bhatia", text: "They referred me for a medical check when they suspected something hormonal instead of just continuing facials. That honesty is rare and I really valued it." },
      { name: "Pooja Ahluwalia", text: "My acne marks have faded noticeably with the routine they built for me. Slow but steady, exactly as they said it would be." },
    ],
  },
  {
    slug: "pigmentation-correction",
    title: "Pigmentation Correction in Mohali for More Even-Looking Skin",
    shortTitle: "Pigmentation Correction",
    metaTitle: "Pigmentation Correction in Mohali | Even-Tone Skin | Ouransh",
    metaDescription: "Explore personalised pigmentation correction at Ouransh in Mohali for dark spots, tanning and uneven tone, with a skin-first plan and sun-care guidance.",
    img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=900&auto=format&fit=crop",
    summary: "A targeted approach for dark spots, tanning and uneven-looking tone, supported by sun protection and home care.",
    details: [
      "Pigmentation can have several causes, including sun exposure, inflammation, hormones and nutritional factors. Identifying the pattern — melasma, sun damage, post-inflammatory marks or general unevenness — helps us select an appropriate plan.",
      "Melasma in particular is managed rather than permanently cured, since it can be triggered again by sun exposure and hormonal changes. Daily sun protection remains essential after visible improvement.",
      "If topical care and in-clinic treatment have not helped as expected, we may recommend looking at relevant internal factors, such as hormonal or nutritional causes, alongside your skin plan.",
    ],
    helps: [
      "Melasma and hormonal pigmentation",
      "Sun-induced tanning and dark patches",
      "Post-acne and post-inflammatory marks",
      "General uneven-looking skin tone",
    ],
    note: "Consistent sun protection is part of every pigmentation plan, in clinic and at home. Results and timelines vary based on the type and depth of pigmentation.",
    faqs: [
      { q: "Can pigmentation be removed completely?", a: "Many types of pigmentation improve significantly, but melasma in particular is managed long-term rather than permanently cured." },
      { q: "Is sunscreen really necessary during treatment?", a: "Yes. Sun exposure can trigger or worsen most types of pigmentation, so daily sun protection is essential alongside any treatment." },
      { q: "How long does pigmentation correction take?", a: "Timelines depend on the type, depth and cause of the pigmentation. We set realistic expectations after assessment." },
      { q: "Can pigmentation come back after treatment?", a: "It can, especially melasma and sun-triggered pigmentation, which is why maintenance and sun protection matter even after visible improvement." },
    ],
    reviews: [
      { name: "Kavita Oberoi", text: "My melasma was getting worse with every summer. Ouransh set realistic expectations from day one and the improvement plus sun-care routine has genuinely helped." },
      { name: "Nikhil Bajaj", text: "Tanning and dark patches from years of travel finally started fading with a consistent plan. They kept reminding me sunscreen was non-negotiable, which paid off." },
      { name: "Ritika Chopra", text: "Appreciated that they didn't promise instant results and instead explained why pigmentation needs patience. My skin tone looks far more even now." },
    ],
  },
];

const skinFaqs = [
  { q: "Which skin treatment should I choose?", a: "The best option depends on your concern, skin type, current routine, medical history and expectations. A consultation is the right first step before selecting HIFU, RF, HydraFacial, laser or a correction plan." },
  { q: "Do you offer treatments for both women and men?", a: "Yes. Skin and aesthetic services can be planned for adults of different genders, subject to individual suitability." },
  { q: "Can I combine multiple treatments?", a: "Some treatments can be combined or sequenced, but timing should be planned after assessment so the skin is not over-treated." },
  { q: "How many sessions will I need?", a: "There is no universal number. Session frequency and total sessions depend on the service, the concern being treated and your individual response." },
  { q: "Do you serve clients outside Mohali?", a: "Yes. Ouransh welcomes clients from Chandigarh, Panchkula and the wider Tricity, in addition to Mohali." },
  { q: "Can I book through WhatsApp?", a: "Yes. WhatsApp, phone call and consultation booking are all available as quick ways to reach our team." },
];

const skinItemListSchema = {
  "@type": "ItemList",
  itemListElement: treatments.map((t, i) => ({
    "@type": "ListItem", position: i + 1, name: t.shortTitle, url: `https://ouransh.in/skin-treatments/${t.slug}`,
  })),
};

export default function SkinTreatments() {
  return (
    <Layout>
      <Seo title="Skin Treatments in Mohali | Aesthetic Care | Ouransh" description="Explore personalised skin and aesthetic treatments at Ouransh in Mohali, including HIFU, RF tightening, HydraFacial, laser hair reduction, acne and pigmentation care." breadcrumbs={[{ name: "Home", path: "/" }, { name: "Skin Treatments" }]} schema={skinItemListSchema} />
      <section className="skin-banner skin-showcase"><div className="container-x skin-banner-inner skin-banner-grid"><div className="skin-banner-content"><span className="skin-showcase-eyebrow">Personalised skin care</span><h1>Personalised Skin & Aesthetic Treatments in Mohali</h1><p className="skin-banner-description">Explore consultation-led options for skin firmness, hydration, unwanted hair, acne, pigmentation and overall skin quality at Ouransh in Sector 117, Mohali — serving clients across Chandigarh, Panchkula and the Tricity.</p><div className="skin-banner-contact"><Link to="/contact?service=skin">Book a Skin Consultation <span aria-hidden="true">→</span></Link><a href="tel:+916239557417"><span aria-hidden="true">☎</span> 062395 57417</a></div><div className="skin-showcase-features"><div><span><FeatureIcon type="person" /></span><p>Personalised<br />plans</p></div><div><span><FeatureIcon type="shield" /></span><p>Expert<br />consultation</p></div><div><span><FeatureIcon type="leaf" /></span><p>Evidence-led<br />treatments</p></div></div></div><div className="skin-showcase-visual"><div className="skin-banner-comparison"><BeforeAfterSlider src="/before-after/acne-correction.png" title="Acne correction" /></div></div></div></section>

      <section className="py-14 bg-white"><div className="container-x max-w-4xl"><h2 className="font-serif text-xl text-forest mb-3">Start With Your Skin Concern</h2><p className="text-sm text-forest/70 leading-relaxed mb-3">Good aesthetic care starts with understanding what you want to improve — not simply choosing a machine or a trending treatment. At Ouransh, we begin with your current skin condition, routine, medical history and expectations before recommending an appropriate plan.</p><p className="text-sm text-forest/70 leading-relaxed">Whether your goal is brighter-looking skin, better hydration, smoother texture, improved firmness, fewer breakouts, more even-looking tone or reduced unwanted hair, the right approach can differ from person to person.</p></div></section>

      <section className="skin-services-section py-16 bg-white"><div className="container-x"><div className="section-heading"><span className="eyebrow">Explore our treatments</span><h2>Skin Care Services</h2><p>Select any service to see complete details.</p></div><div className="skin-service-grid">{treatments.map((t) => <Link key={t.slug} to={`/skin-treatments/${t.slug}`} className="skin-service-card"><div className="skin-service-image"><img src={t.img} alt={t.shortTitle} /></div><div className="skin-service-card-body"><span>Ouransh Skin Care</span><h2>{t.shortTitle}</h2><p>{t.summary}</p><b>Explore Service <i>→</i></b></div></Link>)}</div></div></section>

      <section className="py-14 bg-creamlight"><div className="container-x max-w-4xl grid md:grid-cols-[220px_1fr] gap-8 items-center"><img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=700&auto=format&fit=crop" alt="Before a wedding or event" className="rounded-xl w-full h-40 object-cover" /><div><h2 className="font-serif text-xl text-forest mb-3">Why Ouransh for Skin Care in Mohali?</h2><p className="text-sm text-forest/70 leading-relaxed">Ouransh brings skin, hair and nutrition services together in one local wellness setting. For Tricity clients, that means a single clinic where aesthetic goals can be discussed in the context of lifestyle, routine and long-term maintenance rather than as a one-off procedure. We are based in Sector 117, Mohali and welcome clients from across Mohali, Chandigarh, Panchkula, Kharar, Zirakpur and the wider Tricity.</p></div></div></section>

      <Faq items={skinFaqs} />

      <ServiceCta eyebrow="Not sure which skin treatment fits your goal?" title="Ready to feel confident in your skin?" copy="Tell the Ouransh team what you would like to improve and start with a personalised consultation in Mohali." service="skin" buttonLabel="Book a Skin Consultation" />
    </Layout>
  );
}
