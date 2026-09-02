import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import skinHeroBanner from "../assets/skin-hero-banner.png";

const treatments = [
  {
    title: "HIFU — Non-Surgical Skin Lifting",
    img: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=700&auto=format&fit=crop",
    paras: [
      "HIFU (High-Intensity Focused Ultrasound) tightens and lifts skin by delivering focused ultrasound energy to deeper tissue layers. It works by stimulating the body's own collagen production over the following months. It is most commonly used for early sagging along the jawline, cheeks and neck.",
      "Results build gradually rather than appearing immediately — most people notice change from around eight to twelve weeks as new collagen forms. It suits people wanting firmer skin without surgery or downtime.",
    ],
    note: "We will tell you honestly whether HIFU is right for your skin. It works well for early to moderate laxity. For significant sagging it will not match what you are imagining, and we would rather say so upfront.",
  },
  {
    title: "RF Skin Tightening",
    img: "https://images.unsplash.com/photo-1616394158624-1d9d1f47f9c8?q=80&w=700&auto=format&fit=crop",
    paras: [
      "Radiofrequency skin tightening uses controlled heat to stimulate collagen and improve skin firmness. It works by warming the deeper skin layers while keeping the surface comfortable. It is most commonly used for mild laxity, texture improvement and overall skin quality.",
      "RF is gentler than HIFU and typically needs a course of sessions. It is a good option for maintenance, for younger skin showing early changes, and for people who want gradual improvement rather than a single intensive treatment.",
    ],
  },
  {
    title: "HydraFacial",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=700&auto=format&fit=crop",
    highlight: "Cleansing, exfoliation, extraction and hydration in one session, with no downtime.",
    paras: [
      "HydraFacial suits almost every skin type and is genuinely useful for dullness, congestion and general skin health. It is also our most requested treatment before weddings and events — and unlike some treatments, it can be done closer to the date without risk.",
    ],
  },
  {
    title: "Laser Hair Reduction",
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=700&auto=format&fit=crop",
    paras: [
      "Laser hair reduction reduces unwanted hair by targeting pigment in the follicle with focused light. It works across multiple sessions because hair grows in cycles and only actively growing follicles respond. It is most commonly used on the face, underarms, arms, legs and bikini area.",
      "Most areas need a course of sessions spaced several weeks apart. Facial hair driven by hormones usually needs more, and may need occasional maintenance afterwards.",
    ],
    note: "Expect significant long-term reduction, not total permanent removal. Anyone promising permanence in three sessions is not being straight with you.",
    note2: (
      <>One thing worth knowing: if your facial hair is linked to PCOS, laser helps considerably but works far better alongside nutritional and hormonal support. <Link to="/diet-consultation" className="text-gold underline">More on PCOS →</Link></>
    ),
  },
  {
    title: "Acne Correction",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=700&auto=format&fit=crop",
    paras: [
      "Acne that keeps returning is not a treatment failure — it usually means the trigger was never identified.",
    ],
    list: [
      "Hormonal acne appears along the jaw and chin and flares with your cycle. Common with PCOS and thyroid conditions.",
      "Comedonal acne — blackheads and whiteheads from clogged pores.",
      "Inflammatory acne — deeper, painful lesions that scar if left alone.",
      "Post-acne marks need entirely different treatment from active acne.",
    ],
    paras2: [
      "We treat according to type, and where acne is hormonal or nutrition-linked we address that too. That is the difference between clearing your skin and keeping it clear.",
    ],
    note: "Most people notice change within four to six weeks. Marks and texture take longer.",
  },
  {
    title: "Pigmentation Correction",
    img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=700&auto=format&fit=crop",
    list: [
      "Melasma — symmetrical brown patches on the cheeks, forehead and upper lip. Often hormonal, common after pregnancy.",
      "Sun damage — uneven tone from cumulative exposure, and the Punjab summer is unforgiving.",
      "Post-inflammatory pigmentation — the marks acne leaves behind.",
      "Under-eye pigmentation — sometimes genetic, sometimes nutritional.",
    ],
    paras2: [
      "An honest note on melasma: it is managed, not cured. Treatment lightens it significantly, but hormones and sun bring it back without maintenance and daily sun protection. Any clinic promising permanent removal is overselling.",
    ],
    note: (
      <>Iron and B12 deficiency both worsen pigmentation and slow response to treatment. If topical treatment has not worked for you, the answer may not be topical. <Link to="/diet-consultation" className="text-gold underline">More on our diet consultation →</Link></>
    ),
  },
];

export default function SkinTreatments() {
  return (
    <Layout>
      <Seo
        title="Skin Treatment in Mohali | HIFU, HydraFacial & Laser"
        description="Advanced skin treatments in Mohali — HIFU, RF skin tightening, HydraFacial, laser hair reduction, acne and pigmentation correction. Book in Sector 117."
      />

      <section className="skin-banner">
        <img className="skin-banner-bg" src={skinHeroBanner} alt="Ouransh premium skin care clinic" />
        <div className="container-x skin-banner-inner">
          <div className="skin-banner-content">
            <span className="skin-banner-mark" aria-hidden="true">✦</span>
            <h1>Skin Treatment in Mohali</h1>
            <p className="skin-banner-description">
              Every skin concern has a cause, and treatment only works when it matches that cause. That sounds obvious. It is also why so many people cycle through treatments that never quite hold.
            </p>
            <p className="skin-banner-assurance">At Ouransh, a consultation comes before a recommendation. Always.</p>
            <div className="skin-banner-contact">
              <Link to="/contact">Book a Skin Consultation</Link>
              <a href="tel:+916239557417"><span aria-hidden="true">☎</span> Call 062395 57417</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-x max-w-4xl space-y-16">
          {treatments.map((t) => (
            <div key={t.title} className="grid md:grid-cols-[220px_1fr] gap-8">
              <img src={t.img} alt={t.title} className="rounded-xl w-full h-40 md:h-full object-cover" />
              <div>
                <h2 className="font-serif text-2xl text-forest mb-3">{t.title}</h2>
                {t.highlight && <p className="text-gold font-medium text-sm mb-3">{t.highlight}</p>}
                {t.paras?.map((p, i) => (
                  <p key={i} className="text-sm text-forest/70 leading-relaxed mb-3">{p}</p>
                ))}
                {t.list && (
                  <ul className="space-y-2 mb-3">
                    {t.list.map((li, i) => (
                      <li key={i} className="text-sm text-forest/70 leading-relaxed flex gap-2">
                        <span className="text-gold shrink-0">✓</span> {li}
                      </li>
                    ))}
                  </ul>
                )}
                {t.paras2?.map((p, i) => (
                  <p key={i} className="text-sm text-forest/70 leading-relaxed mb-3">{p}</p>
                ))}
                {t.note && (
                  <div className="bg-creamlight rounded-lg p-4 text-xs text-forest/70 leading-relaxed mt-3">
                    ℹ️ {t.note}
                  </div>
                )}
                {t.note2 && (
                  <div className="bg-creamlight rounded-lg p-4 text-xs text-forest/70 leading-relaxed mt-3">
                    ℹ️ {t.note2}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 bg-creamlight">
        <div className="container-x max-w-4xl grid md:grid-cols-[220px_1fr] gap-8 items-center">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=700&auto=format&fit=crop"
            alt="Before a wedding or event"
            className="rounded-xl w-full h-40 object-cover"
          />
          <div>
            <h2 className="font-serif text-xl text-forest mb-3">Before a Wedding or Event</h2>
            <p className="text-sm text-forest/70 leading-relaxed mb-2">
              Come in four to six weeks ahead, not the week of. Skin needs time to settle and some treatments cause temporary purging. HydraFacial is the exception and can be done closer to the date.
            </p>
            <p className="text-sm text-forest/70 leading-relaxed">
              We would rather turn away a last-minute booking than send you to your own wedding with reactive skin.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-cream">
        <div className="container-x flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="bg-gold text-white rounded-lg px-6 py-3 text-sm">📅 Book a Skin Consultation</Link>
          <a href="tel:+916239557417" className="border border-gold/40 rounded-lg px-6 py-3 text-sm text-forest">📞 Call 062395 57417</a>
        </div>
      </section>
    </Layout>
  );
}
