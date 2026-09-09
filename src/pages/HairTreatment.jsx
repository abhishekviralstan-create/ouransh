import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import ServiceCta from "../components/ServiceCta";
import ServiceLandingHero from "../components/ServiceLandingHero";
import Faq from "../components/Faq";
import { hairServices } from "./HairServiceDetail";

export const hairServiceCards = [
  { slug: "gfc-treatment", title: hairServices["gfc-treatment"].shortTitle, img: "/Subservices/GFC-Treatment.jpg", summary: hairServices["gfc-treatment"].summary },
  { slug: "prp-therapy", title: hairServices["prp-therapy"].shortTitle, img: "/Subservices/PRP%20therapy.jpg", summary: hairServices["prp-therapy"].summary },
  { slug: "hair-fall-causes", title: hairServices["hair-fall-causes"].shortTitle, img: "/Subservices/hair%20fall%20causes.avif", summary: hairServices["hair-fall-causes"].summary },
];

const approach = [
  { title: "We start with why.", desc: "Your consultation covers medical history, recent illness or pregnancy, medication, diet, stress and sleep. If your picture suggests a deficiency or thyroid issue, we recommend testing before you spend on treatment." },
  { title: "We treat the cause and the scalp together.", desc: "Clinical treatment works considerably better when the internal picture is corrected alongside it." },
  { title: "We give honest timelines.", desc: "Hair grows slowly. Reduced shedding shows in six to eight weeks. Visible regrowth takes three to six months. Anyone promising faster is selling you something." },
];

const faqs = [
  { q: "What is the first step for hair fall?", a: "Start with an assessment of the pattern, duration, scalp condition, medical history and possible triggers. A procedure should only be chosen after understanding what may be contributing." },
  { q: "Is PRP suitable for every type of hair loss?", a: "No. PRP may be considered for selected patterns of hair loss, but it is not appropriate or effective for every cause. Suitability should be assessed by a qualified professional." },
  { q: "What is the difference between PRP and GFC?", a: "Both are prepared from your own blood, but the preparation process and final product differ. We explain the exact protocol and why one option may be suggested." },
  { q: "How quickly will I see results?", a: "Hair growth cycles are slow, so any change is typically assessed over time rather than in days. Results vary and should not be guaranteed." },
  { q: "Can nutrition affect hair fall?", a: "Nutritional deficiencies can contribute to hair shedding in some people. Testing and supplementation should be based on individual need rather than routine high-dose supplements." },
  { q: "When should hair loss be medically assessed?", a: "Sudden, patchy, rapidly worsening hair loss, scalp inflammation, scarring, pain or hair loss associated with other symptoms deserves medical evaluation." },
];

const hairItemListSchema = {
  "@type": "ItemList",
  itemListElement: hairServiceCards.map((s, i) => ({
    "@type": "ListItem", position: i + 1, name: s.title, url: `https://ouransh.in/hair-treatment/${s.slug}`,
  })),
};

export default function HairTreatment() {
  return (
    <Layout>
      <Seo
        title="Hair Treatment in Mohali | GFC, PRP & Hair Fall Care"
        description="Explore hair and scalp care at Ouransh Mohali, including GFC, PRP hair therapy and personalised assessment of common hair fall causes for Tricity clients."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Hair Treatment" }]}
        schema={hairItemListSchema}
      />

      <ServiceLandingHero eyebrow="Hair & scalp care" title="Hair Treatment & Hair Fall Care in Mohali" description="Hair fall can have more than one cause. Ouransh combines hair and scalp assessment with consultation-led options such as GFC and PRP therapy, serving clients across Mohali and the Chandigarh Tricity." service="hair" buttonLabel="Book a Hair Consultation" comparisonSrc="/before-after/hair-treatment-hero.png" comparisonTitle="Hair treatment" features={[{ icon: "person", label: <>Cause-first<br />assessment</> }, { icon: "shield", label: <>Expert<br />consultation</> }, { icon: "leaf", label: <>Evidence-led<br />hair care</> }]} />

      <section className="py-14 bg-white"><div className="container-x max-w-4xl"><h2 className="font-serif text-xl text-forest mb-3">Hair Fall Is a Symptom, Not a Single Diagnosis</h2><p className="text-sm text-forest/70 leading-relaxed">Hair shedding can be influenced by genetics, stress, nutritional status, hormonal changes, illness, medications, scalp conditions and hair-care practices. That is why choosing a procedure before understanding the pattern of hair loss can lead to unrealistic expectations. At Ouransh, assessment is always the first step — we discuss what you have noticed, how long it has been happening, whether there are scalp symptoms, and whether medical evaluation or laboratory testing may be appropriate.</p></div></section>

      <section className="skin-services-section py-16"><div className="container-x"><div className="section-heading"><span className="eyebrow">Explore our treatments</span><h2>Hair Care Services</h2><p>Select any service to see complete details.</p></div><div className="skin-service-grid">{hairServiceCards.map((service) => <Link key={service.slug} to={`/hair-treatment/${service.slug}`} className="skin-service-card"><div className="skin-service-image"><img src={service.img} alt={service.title} /></div><div className="skin-service-card-body"><span>Ouransh Hair Care</span><h2>{service.title}</h2><p>{service.summary}</p><b>Explore Service <i>→</i></b></div></Link>)}</div></div></section>

      <section className="py-16 bg-white">
        <div className="container-x grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-serif text-2xl text-forest mb-6">How We Approach Hair Fall</h2>
            <div className="space-y-5">
              {approach.map((a) => (
                <div key={a.title} className="flex gap-3">
                  <span className="text-gold shrink-0">✦</span>
                  <div>
                    <p className="text-sm font-medium text-forest">{a.title}</p>
                    <p className="text-xs text-forest/60 mt-1 leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-forest text-white rounded-xl p-7">
            <h2 className="font-serif text-xl mb-4">What We Don't Do</h2>
            <p className="text-sm leading-relaxed text-white/80 mb-3">
              We do not perform hair transplants. That is surgery and belongs with a qualified transplant surgeon. If your hair loss has reached a stage where a transplant is the right option, we will tell you honestly and point you to someone who does it well.
            </p>
            <p className="text-sm leading-relaxed text-white/80">
              We would rather lose that consultation than take payment for treatments that cannot reach the result you want.
            </p>
          </div>
        </div>
      </section>

      <Faq title="Common Questions" items={faqs} />

      <ServiceCta eyebrow="Stronger hair starts with the right assessment" title="Start With a Hair & Scalp Assessment" copy="Book a consultation at Ouransh Mohali to discuss hair fall, possible causes and suitable next steps." service="hair" buttonLabel="Book a Hair Consultation" />
    </Layout>
  );
}
