import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const conditions = [
  {
    title: "PCOS",
    paras: [
      "PCOS shows up on your skin, your hair, your cycle, your weight and your energy at the same time. Most clinics treat one of those.",
      "Insulin resistance makes weight loss genuinely harder. That is physiology, not willpower, whatever you may have been told. Jawline acne, oiliness, unwanted facial hair, scalp thinning and irregular cycles all trace back to the same underlying picture.",
      "This is where treating both sides matters most. PCOS acne treated only on the surface returns. Managed only nutritionally, it improves slowly while you live with skin you are unhappy about. Addressing both means faster visible improvement and results that hold.",
    ],
    note: "PCOS is managed, not cured. We work alongside your gynaecologist rather than around them — bring your reports and current medication to your first visit.",
  },
  {
    title: "Thyroid Disorders",
    paras: [
      "Hypothyroidism affects weight, energy, hair and skin simultaneously, and it is widely under-diagnosed.",
      "Nutrition does not replace thyroid medication — it supports it. What we can do is build a plan that works with your condition rather than against it: nutrient timing around your medication, addressing the deficiencies that commonly accompany thyroid conditions, and setting realistic expectations about weight, which behaves differently with an underactive thyroid.",
    ],
    note: "Continue your prescribed medication and endocrinologist follow-ups. Bring your recent TSH reports.",
  },
  {
    title: "Diabetes Support",
    paras: [
      "Nutritional support for diabetes focuses on blood sugar stability through meal composition, timing and portion structure. It works alongside your doctor's treatment plan, never as a replacement for it. It is most commonly used for type 2 diabetes and pre-diabetes management.",
      "The plans we build are practical: Punjabi household food, adjusted rather than replaced. Most people arrive expecting to give up roti and rice entirely. That is rarely necessary and rarely sustainable.",
    ],
    note: "We do not adjust medication and we do not replace your treating physician. Nutrition is one part of diabetes management, and we work with your doctor's plan, not around it.",
  },
  {
    title: "Fatty Liver Management",
    paras: [
      "Fatty liver is increasingly common and, in its earlier stages, often responds well to dietary and lifestyle change.",
      "We focus on what the evidence supports: gradual weight reduction where appropriate, reducing refined carbohydrates and added sugars, and building a pattern you can maintain long-term. Crash approaches do not help fatty liver and can make things worse.",
    ],
    note: "Continue your hepatologist or physician's follow-ups and monitoring. Bring recent liver function tests and ultrasound reports.",
  },
  {
    title: "Weight Management",
    paras: [
      "Most people we see have already lost weight before. Several times. Losing it was never the problem.",
      "Plans fail because they are too restrictive to sustain, they ignore your work schedule and your family's meals, and they end — with nothing planned for afterwards.",
      "We start with a full assessment, including whether a medical factor is involved. Thyroid conditions, PCOS and insulin resistance genuinely change what works, and no plan should be written without knowing. Your plan is built around food your household already cooks, and we adjust as we go.",
    ],
    note: "If you want to lose a lot of weight very quickly before an event, we are not the right clinic. Rapid restriction is hard on your body, shows on your skin and hair within months, and it does not hold.",
  },
];

const howWeWork = [
  { title: "We ask before we prescribe.", desc: "Medical history, medication, work schedule, who cooks at home, what you actually like eating." },
  { title: "Your plan uses your kitchen.", desc: "Punjabi households don't run on quinoa. Plans built around unfamiliar food get abandoned in three weeks." },
  { title: "We follow up.", desc: "Adjustment is the whole job. A plan handed over once is a printout, not a consultation." },
  { title: "No extreme restriction.", desc: "Plans that leave you hungry and miserable don't last, and they aren't good for you." },
];

export default function DietConsultation() {
  return (
    <Layout>
      <Seo
        title="Dietitian in Mohali | PCOS, Thyroid & Weight Management"
        description="Experienced dietitians in Mohali offering personalised plans for PCOS, thyroid, diabetes, fatty liver and weight management. Sector 117, open 7 days."
      />

      <section className="bg-cream py-14">
        <div className="container-x grid lg:grid-cols-[1fr_.9fr] gap-10 items-center">
          <div>
          <h1 className="font-serif text-4xl md:text-5xl text-forest mb-5">
            Dietitian in Mohali — Nutrition That Fits Your Actual Life
          </h1>
          <p className="text-forest/70 text-sm leading-relaxed mb-3">
            Most diet plans fail for the same reason: they were written for someone else's life.
          </p>
          <p className="text-forest/70 text-sm leading-relaxed">
            A personalised nutrition consultation assesses your medical history, routine, preferences and goals before any plan is made. It works by building around foods you already eat rather than replacing them wholesale. It is most commonly used for PCOS, thyroid conditions, diabetes support, fatty liver and weight management.
          </p>
          <div className="flex gap-3 mt-7"><Link to="/contact" className="bg-forest text-white rounded-lg px-5 py-3 text-sm">Book a Diet Consultation</Link><a href="tel:+916239557417" className="border border-gold rounded-lg px-5 py-3 text-sm">Call 062395 57417</a></div>
          </div>
          <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=85&w=900&auto=format&fit=crop" alt="Personalised nutrition consultation" className="hero-portrait" />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-x max-w-4xl space-y-14">
          {conditions.map((c) => (
            <div key={c.title}>
              <h2 className="font-serif text-2xl text-forest mb-3">{c.title}</h2>
              {c.paras.map((p, i) => (
                <p key={i} className="text-sm text-forest/70 leading-relaxed mb-3">{p}</p>
              ))}
              <div className="bg-creamlight rounded-lg p-4 text-xs text-forest/70 leading-relaxed">
                ℹ️ {c.note}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-creamlight">
        <div className="container-x">
          <h2 className="font-serif text-2xl text-forest mb-8">How We Work</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {howWeWork.map((h) => (
              <div key={h.title} className="flex gap-3 bg-white rounded-xl p-5">
                <span className="text-gold shrink-0">✦</span>
                <div>
                  <p className="text-sm font-medium text-forest">{h.title}</p>
                  <p className="text-xs text-forest/60 mt-1 leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-x max-w-3xl">
          <div className="bg-forest text-white rounded-2xl p-8">
            <h2 className="font-serif text-xl mb-4">An Honest Note</h2>
            <p className="text-sm text-white/80 leading-relaxed mb-3">
              We don't publish kilo promises or before-and-after numbers. Every body responds differently — age, medical history, medication and starting point all change the timeline. Anyone guaranteeing a specific number by a specific date is guessing.
            </p>
            <p className="text-sm text-gold font-medium">
              What we can promise is an honest assessment and a plan you can actually follow.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-cream">
        <div className="container-x flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="bg-gold text-white rounded-lg px-6 py-3 text-sm">📅 Book a Nutrition Consultation</Link>
          <a href="tel:+916239557417" className="border border-gold/40 rounded-lg px-6 py-3 text-sm text-forest">📞 Call 062395 57417</a>
        </div>
      </section>
    </Layout>
  );
}
