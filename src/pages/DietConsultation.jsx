import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import ServiceCta from "../components/ServiceCta";
import ServiceLandingHero from "../components/ServiceLandingHero";
import Faq from "../components/Faq";

// oxlint-disable-next-line react/only-export-components -- shared with diet detail routes
export const conditions = [
  {
    id: "pcos",
    title: "PCOS Nutrition Support in Mohali for Sustainable Everyday Habits",
    shortTitle: "PCOS",
    metaTitle: "PCOS Nutrition Support in Mohali | Ouransh",
    metaDescription: "Personalised PCOS nutrition support at Ouransh Mohali to help manage weight, skin, hair and cycle-related symptoms alongside your gynaecologist's care.",
    img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=900&auto=format&fit=crop",
    paras: [
      "PCOS shows up on your skin, your hair, your cycle, your weight and your energy at the same time. Most clinics treat one of those.",
      "Insulin resistance makes weight loss genuinely harder. That is physiology, not willpower, whatever you may have been told. Jawline acne, oiliness, unwanted facial hair, scalp thinning and irregular cycles all trace back to the same underlying picture.",
      "This is where treating both sides matters most. PCOS acne treated only on the surface returns. Managed only nutritionally, it improves slowly while you live with skin you are unhappy about. Addressing both means faster visible improvement and results that hold.",
    ],
    helps: ["Everyday food choices that support insulin sensitivity", "Realistic, sustainable weight goals", "Coordinating nutrition with your gynaecologist's treatment plan"],
    note: "PCOS is managed, not cured. We work alongside your gynaecologist rather than around them — bring your reports and current medication to your first visit.",
    faqs: [
      { q: "Can diet cure PCOS?", a: "No. Nutrition can support symptom management and metabolic health, but PCOS requires appropriate medical diagnosis and care alongside it." },
      { q: "Will I need to give up all carbohydrates?", a: "Not usually. For most people, meal balance, portions and food quality matter more than eliminating an entire food group." },
      { q: "Can nutrition help with PCOS-related acne or hair fall?", a: "It can support improvement when combined with appropriate skin or hair treatment, since the underlying hormonal picture affects both." },
      { q: "Do you replace my gynaecologist's treatment?", a: "No. We work alongside your treating doctor and ask you to bring recent reports and current medication to your consultation." },
    ],
    reviews: [
      { name: "Simran Bhalla", text: "First dietitian who actually explained insulin resistance to me instead of just telling me to eat less. My cycles have become more regular and my skin has calmed down too." },
      { name: "Radhika Suri", text: "They coordinated with my gynaecologist instead of working in isolation. My weight loss has been slow but it's finally sustainable, not another crash diet." },
      { name: "Alisha Kohli", text: "PCOS acne and weight both improved once they treated the hormonal side alongside my skin routine. Wish I had found them years ago." },
    ],
  },
  {
    id: "thyroid-disorders",
    title: "Thyroid Nutrition Support in Mohali That Complements Medical Care",
    shortTitle: "Thyroid Disorders",
    metaTitle: "Thyroid Nutrition Support in Mohali | Ouransh",
    metaDescription: "Get practical thyroid nutrition support at Ouransh Mohali that works alongside your prescribed medication, not as a replacement for it.",
    img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=900&auto=format&fit=crop",
    paras: [
      "Hypothyroidism affects weight, energy, hair and skin simultaneously, and it is widely under-diagnosed.",
      "Nutrition does not replace thyroid medication — it supports it. What we can do is build a plan that works with your condition rather than against it: nutrient timing around your medication, addressing the deficiencies that commonly accompany thyroid conditions, and setting realistic expectations about weight, which behaves differently with an underactive thyroid.",
    ],
    helps: ["Meal timing that works around thyroid medication", "Addressing common accompanying deficiencies", "Realistic weight-management expectations"],
    note: "Continue your prescribed medication and endocrinologist follow-ups. Bring your recent TSH reports.",
    faqs: [
      { q: "Can diet cure a thyroid disorder?", a: "No. Thyroid disorders require medical diagnosis and, usually, prescribed medication. Nutrition supports overall health and symptom management alongside that care." },
      { q: "Does thyroid medication need to be taken with food?", a: "Timing instructions vary by medication and are set by your prescribing doctor. We plan meals around your existing instructions rather than changing them." },
      { q: "Why is weight loss harder with hypothyroidism?", a: "An underactive thyroid can slow metabolism and affect energy, which is why timelines and expectations are set individually rather than using a generic plan." },
    ],
    reviews: [
      { name: "Navjot Kaur", text: "They planned my meals around my thyroid medication timing instead of ignoring it like my last dietitian did. My energy levels have genuinely improved." },
      { name: "Rajat Anand", text: "Realistic about how slow weight loss can be with hypothyroidism. No false promises, just steady, honest progress." },
      { name: "Preeti Chadha", text: "Continued working with my endocrinologist's reports and built a plan around it. Finally feel like my nutrition and medical care are actually aligned." },
    ],
  },
  {
    id: "diabetes-support",
    title: "Diabetes Nutrition Support in Mohali for Practical, Glucose-Aware Eating",
    shortTitle: "Diabetes Support",
    metaTitle: "Diabetes Nutrition Support in Mohali | Ouransh",
    metaDescription: "Practical, glucose-aware meal planning at Ouransh Mohali for type 2 diabetes and pre-diabetes, coordinated with your doctor's treatment plan.",
    img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=900&auto=format&fit=crop",
    paras: [
      "Nutritional support for diabetes focuses on blood sugar stability through meal composition, timing and portion structure. It works alongside your doctor's treatment plan, never as a replacement for it. It is most commonly used for type 2 diabetes and pre-diabetes management.",
      "The plans we build are practical: Punjabi household food, adjusted rather than replaced. Most people arrive expecting to give up roti and rice entirely. That is rarely necessary and rarely sustainable.",
    ],
    helps: ["Glucose-aware meal composition and timing", "Portion strategies for everyday household food", "Fibre-rich food choices that fit your routine"],
    note: "We do not adjust medication and we do not replace your treating physician. Nutrition is one part of diabetes management, and we work with your doctor's plan, not around it.",
    faqs: [
      { q: "Do I have to stop eating roti and rice?", a: "Usually not. Portion, timing and pairing with fibre and protein matter more than eliminating staple foods entirely." },
      { q: "Can nutrition replace my diabetes medication?", a: "No. Nutrition is coordinated with your doctor's treatment and monitoring, not used as a replacement." },
      { q: "Is this suitable for type 1 diabetes?", a: "Our plans are most commonly used for type 2 diabetes and pre-diabetes. Any plan for type 1 diabetes is closely coordinated with your treating physician." },
    ],
    reviews: [
      { name: "Baljeet Singh", text: "Was told I'd have to give up roti and rice completely elsewhere. Ouransh just adjusted my portions and timing and my sugar levels are far more stable now." },
      { name: "Shalini Kapur", text: "They worked directly with what my doctor had already prescribed instead of contradicting it. Genuinely practical, household-friendly meal plans." },
      { name: "Deepak Sharma", text: "Pre-diabetic reports scared me, but the plan they built fit my daily routine without feeling restrictive. My last checkup showed real improvement." },
    ],
  },
  {
    id: "fatty-liver",
    title: "Fatty Liver Nutrition Support in Mohali for Sustainable Metabolic Health",
    shortTitle: "Fatty Liver",
    metaTitle: "Fatty Liver Nutrition Support in Mohali | Ouransh",
    metaDescription: "Sustainable, evidence-based fatty liver nutrition support at Ouransh Mohali, coordinated with your physician's monitoring and follow-up.",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=900&auto=format&fit=crop",
    paras: [
      "Fatty liver is increasingly common and, in its earlier stages, often responds well to dietary and lifestyle change.",
      "We focus on what the evidence supports: gradual weight reduction where appropriate, reducing refined carbohydrates and added sugars, and building a pattern you can maintain long-term. Crash approaches do not help fatty liver and can make things worse.",
    ],
    helps: ["Gradual, sustainable weight reduction where appropriate", "Reducing refined carbohydrates and added sugars", "Building habits you can maintain long-term"],
    note: "Continue your hepatologist or physician's follow-ups and monitoring. Bring recent liver function tests and ultrasound reports.",
    faqs: [
      { q: "Can fatty liver be reversed through diet?", a: "In earlier stages, dietary and lifestyle changes often support meaningful improvement. Your physician's monitoring remains important throughout." },
      { q: "Is a crash diet a faster way to improve fatty liver?", a: "No. Rapid weight loss does not help fatty liver and can worsen it in some cases. A gradual, sustainable approach is safer and more effective." },
      { q: "Do I need to avoid all fats?", a: "No. The focus is on reducing refined carbohydrates and added sugars and building an overall sustainable pattern, not eliminating fat entirely." },
    ],
    reviews: [
      { name: "Amanpreet Sidhu", text: "My liver function reports improved after a few months of the gradual plan they built. No crash dieting, just consistent, sustainable changes." },
      { name: "Varun Chawla", text: "They kept in touch with my physician's monitoring the whole time instead of working separately. Reassuring to have both sides aligned." },
      { name: "Komal Trehan", text: "Cutting down refined sugar felt manageable with the way they structured my meals. My latest ultrasound showed real improvement." },
    ],
  },
  {
    id: "weight-management",
    title: "Personalised Weight Management in Mohali Without Crash Diets",
    shortTitle: "Weight Management",
    metaTitle: "Weight Management in Mohali | Ouransh",
    metaDescription: "Personalised, sustainable weight management at Ouransh Mohali built around your household food and routine — no crash diets or guaranteed numbers.",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=900&auto=format&fit=crop",
    paras: [
      "Most people we see have already lost weight before. Several times. Losing it was never the problem.",
      "Plans fail because they are too restrictive to sustain, they ignore your work schedule and your family's meals, and they end — with nothing planned for afterwards.",
      "We start with a full assessment, including whether a medical factor is involved. Thyroid conditions, PCOS and insulin resistance genuinely change what works, and no plan should be written without knowing. Your plan is built around food your household already cooks, and we adjust as we go.",
    ],
    helps: ["Sustainable habits built around your own kitchen", "Identifying medical factors that affect weight", "A plan for maintaining results afterwards"],
    note: "If you want to lose a lot of weight very quickly before an event, we are not the right clinic. Rapid restriction is hard on your body, shows on your skin and hair within months, and it does not hold.",
    faqs: [
      { q: "Do you provide one diet plan for everyone?", a: "No. Plans are personalised to your health goals, preferences, routine and medical context, including any thyroid, PCOS or insulin-resistance factors." },
      { q: "Do you offer weight-loss guarantees?", a: "No. Sustainable weight management varies by person, and we do not promise a fixed amount of weight loss in a fixed time." },
      { q: "Can I follow the plan while taking medication?", a: "Yes, and it should be coordinated with your prescribing clinician when food choices, meal timing or weight changes could affect medication needs." },
      { q: "What happens after I reach my goal?", a: "We plan for maintenance from the start, since a plan that ends abruptly is one of the most common reasons weight is regained." },
    ],
    reviews: [
      { name: "Jaspreet Brar", text: "I'd lost and regained weight three times before this. The difference here was a maintenance plan built in from day one, not just a diet chart." },
      { name: "Rohit Aggarwal", text: "They found out I had mild insulin resistance before writing my plan, which explained why nothing had worked before. Actually seeing steady results now." },
      { name: "Nandini Rawat", text: "No starvation, no extreme restriction — just food from my own kitchen adjusted properly. Down several kilos and it's actually staying off." },
    ],
  },
];

const howWeWork = [
  { title: "We ask before we prescribe.", desc: "Medical history, medication, work schedule, who cooks at home, what you actually like eating." },
  { title: "Your plan uses your kitchen.", desc: "Punjabi households don't run on quinoa. Plans built around unfamiliar food get abandoned in three weeks." },
  { title: "We follow up.", desc: "Adjustment is the whole job. A plan handed over once is a printout, not a consultation." },
  { title: "No extreme restriction.", desc: "Plans that leave you hungry and miserable don't last, and they aren't good for you." },
];

const dietFaqs = [
  { q: "Do you provide one diet plan for everyone?", a: "No. Plans are personalised to health goals, preferences, routine and medical context." },
  { q: "Can diet cure PCOS, thyroid disease or diabetes?", a: "No. Nutrition can support health goals and symptom management, but these conditions require appropriate medical diagnosis and care. We do not make cure claims." },
  { q: "Can I follow the plan while taking medication?", a: "Nutrition plans are coordinated with your prescribing clinician when food choices, meal timing or weight changes could affect medication needs." },
  { q: "Do I need to stop eating carbohydrates?", a: "Not usually. For many people, quality, portions, meal balance and individual response matter more than eliminating an entire food group." },
  { q: "Do you offer weight-loss guarantees?", a: "No. Sustainable weight management varies by person, and credible care should not promise a fixed amount of weight loss in a fixed time." },
  { q: "Can clients from Chandigarh or Panchkula book?", a: "Yes. Our clinic is based in Mohali and welcomes clients from across the Chandigarh Tricity." },
];

const dietItemListSchema = {
  "@type": "ItemList",
  itemListElement: conditions.map((c, i) => ({
    "@type": "ListItem", position: i + 1, name: c.shortTitle, url: `https://ouransh.in/diet-consultation/${c.id}`,
  })),
};

export default function DietConsultation() {
  return (
    <Layout>
      <Seo
        title="Diet & Nutrition in Mohali | Personalised Plans | Ouransh"
        description="Get personalised nutrition support at Ouransh Mohali for PCOS, thyroid concerns, diabetes, fatty liver and sustainable weight management across the Tricity."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Diet & Nutrition" }]}
        schema={dietItemListSchema}
      />

      <ServiceLandingHero eyebrow="Practical nutrition support" title="Personalised Diet & Nutrition Support in Mohali" description="Build practical food and lifestyle habits around your health goals with personalised nutrition support at Ouransh in Mohali. Plans are designed to complement appropriate medical care, not replace it." service="diet" buttonLabel="Book a Diet Consultation" comparisonSrc="/before-after/diet-consultation-hero.png" comparisonTitle="Nutrition and lifestyle support" features={[{ icon: "person", label: <>Personalised<br />plans</> }, { icon: "shield", label: <>Health-aware<br />guidance</> }, { icon: "leaf", label: <>Practical<br />nutrition</> }]} />

      <section className="py-14 bg-white"><div className="container-x max-w-4xl"><h2 className="font-serif text-xl text-forest mb-3">Nutrition That Fits Real Life</h2><p className="text-sm text-forest/70 leading-relaxed">A useful nutrition plan should work with your routine, food preferences, culture, work schedule, health conditions and budget. We avoid restrictive templates presented as universal solutions and instead emphasise realistic, sustainable changes. For health conditions such as PCOS, thyroid disorders, diabetes and fatty liver, nutrition can be an important part of care, but diagnosis, medication and medical monitoring remain the responsibility of the appropriate healthcare professional.</p></div></section>

      <section className="skin-services-section py-16 bg-white"><div className="container-x"><div className="section-heading"><span className="eyebrow">Explore our programmes</span><h2>Diet &amp; Nutrition Services</h2><p>Select any service to see complete details.</p></div><div className="skin-service-grid">{conditions.map((condition) => <Link key={condition.id} to={`/diet-consultation/${condition.id}`} className="skin-service-card"><div className="skin-service-image"><img src={condition.img} alt={condition.shortTitle} /></div><div className="skin-service-card-body"><span>Ouransh Nutrition</span><h2>{condition.shortTitle}</h2><p>{condition.paras[0]}</p><b>Explore Service <i>→</i></b></div></Link>)}</div></div></section>

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

      <Faq items={dietFaqs} />

      <ServiceCta eyebrow="Practical nutrition built around your life" title="Build a Nutrition Plan You Can Actually Follow" copy="Book a personalised nutrition consultation at Ouransh Mohali and bring your goals, routine and relevant medical information." service="diet" buttonLabel="Book a Nutrition Consultation" />
    </Layout>
  );
}
