import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import hairHeroBanner from "../assets/hair-hero-banner.png";

const causes = [
  { title: "Low iron or ferritin.", desc: "The most common cause of diffuse hair fall in Indian women, and the most frequently missed. Your haemoglobin can be normal while your ferritin sits far too low for hair growth." },
  { title: "Post-pregnancy shedding.", desc: "Usually starts two to four months after delivery and feels alarming. Typically temporary, but nutritional support during breastfeeding makes a real difference to how quickly it recovers." },
  { title: "Thyroid conditions.", desc: "Hypothyroidism causes diffuse thinning across the scalp and is widely under-diagnosed." },
  { title: "PCOS.", desc: "Thinning at the crown alongside unwanted facial hair — the same hormonal picture producing opposite effects in different places." },
  { title: "B12 and vitamin D deficiency.", desc: "Both common, both correctable, both routinely overlooked." },
  { title: "After rapid weight loss.", desc: "Crash dieting triggers shedding roughly two to three months later. It is one reason we do not run aggressive weight loss plans." },
  { title: "Scalp conditions.", desc: "Dandruff, seborrheic dermatitis and fungal infections all cause hair fall and need treating directly." },
];

const approach = [
  { title: "We start with why.", desc: "Your consultation covers medical history, recent illness or pregnancy, medication, diet, stress and sleep. If your picture suggests a deficiency or thyroid issue, we will recommend testing before you spend anything on treatment." },
  { title: "We treat the cause and the scalp together.", desc: "Clinical treatment works considerably better when the internal picture is corrected alongside it." },
  { title: "We give honest timelines.", desc: "Hair grows slowly. Reduced shedding shows in six to eight weeks. Visible regrowth takes three to six months. Anyone promising faster is selling you something." },
];

const faqs = [
  { q: "How much hair fall is normal?", a: "Losing 50 to 100 strands a day is normal. Handfuls in the shower, visible scalp, or a noticeably thinner ponytail are worth investigating." },
  { q: "Will my hair grow back?", a: "It depends on the cause. Deficiency-related and post-pregnancy hair loss usually recover well once corrected. Long-standing pattern hair loss is a different picture, and we will be straight with you about which one you have." },
  { q: "Do I need blood tests?", a: "Often, yes. Ferritin, B12, vitamin D and thyroid function tell us more in one report than months of guessing. Bring any recent reports to your first visit." },
  { q: "My hair started falling after I lost weight. Is that connected?", a: "Almost certainly. Rapid weight loss commonly triggers shedding two to three months afterwards. It usually recovers once nutrition is properly corrected." },
];

export default function HairTreatment() {
  return (
    <Layout>
      <Seo
        title="Hair Fall Treatment in Mohali | PRP & Hair Care"
        description="Hair fall treatment in Mohali that finds the cause first. PRP therapy plus nutrition and hormonal assessment. Open 7 days in Sector 117. Book today."
      />

      <section className="skin-banner hair-banner">
        <img className="skin-banner-bg" src={hairHeroBanner} alt="Ouransh premium hair treatment clinic" />
        <div className="container-x skin-banner-inner">
          <div className="skin-banner-content hair-banner-content">
            <span className="skin-banner-mark" aria-hidden="true">✦</span>
            <h1>Hair Fall Treatment in Mohali — Finding the Cause First</h1>
            <p className="skin-banner-description">
              Hair fall is a symptom, not a diagnosis. Treating it without knowing why it is happening is why so many people spend months on serums and see nothing change.
            </p>
            <div className="skin-banner-contact">
              <Link to="/contact">Book a Hair Consultation</Link>
              <a href="tel:+916239557417"><span aria-hidden="true">☎</span> Call 062395 57417</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-x">
          <h2 className="font-serif text-2xl text-forest mb-2">Why Your Hair Is Falling</h2>
          <p className="text-sm text-forest/60 mb-8">Most hair fall, especially in women, has an internal cause. These are the ones we see most often.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {causes.map((c) => (
              <div key={c.title} className="bg-creamlight rounded-xl p-5">
                <h3 className="font-medium text-forest text-sm mb-2">{c.title}</h3>
                <p className="text-xs text-forest/60 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-creamlight">
        <div className="container-x grid md:grid-cols-[280px_1fr] gap-10 items-start">
          <img
            src="https://images.unsplash.com/photo-1631815588090-d1bcbe9a8537?q=80&w=700&auto=format&fit=crop"
            alt="PRP Therapy"
            className="rounded-xl w-full h-56 object-cover"
          />
          <div>
            <h2 className="font-serif text-2xl text-forest mb-3">PRP Therapy</h2>
            <p className="text-sm text-forest/70 leading-relaxed mb-3">
              PRP (Platelet-Rich Plasma) therapy uses a concentrated preparation from your own blood, applied to the scalp to support hair follicle activity. It works by delivering growth factors directly to the treatment area. It is most commonly used for diffuse thinning and reduced hair density rather than for areas with no remaining follicles.
            </p>
            <p className="text-sm text-forest/70 leading-relaxed mb-3">
              PRP is done as a course of sessions spaced several weeks apart, with maintenance sessions afterwards. Because it uses your own blood, there is no compatibility concern.
            </p>
            <div className="bg-white rounded-lg p-4 text-xs text-forest/70 leading-relaxed">
              ℹ️ It works best when the underlying cause is corrected at the same time. PRP into a scalp starved of iron is money spent working against your own physiology — which is exactly why we assess nutrition alongside it.
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-16 bg-creamlight">
        <div className="container-x max-w-3xl">
          <h2 className="font-serif text-2xl text-forest mb-8">Common Questions</h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-sm font-medium text-forest mb-1">❓ {f.q}</h3>
                <p className="text-xs text-forest/60 leading-relaxed pl-6">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-cream">
        <div className="container-x flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="bg-gold text-white rounded-lg px-6 py-3 text-sm">📅 Book a Hair Consultation</Link>
          <a href="tel:+916239557417" className="border border-gold/40 rounded-lg px-6 py-3 text-sm text-forest">📞 Call 062395 57417</a>
        </div>
      </section>
    </Layout>
  );
}
