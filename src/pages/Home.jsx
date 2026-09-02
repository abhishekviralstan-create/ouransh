import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import homeHeroWoman from "../assets/home-hero-woman.png";

const Icon = ({ type }) => {
  const paths = {
    pin: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.7 2Z"/>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></>,
    leaf: <><path d="M20 4C12 4 5 8 5 15c0 3 2 5 5 5 7 0 10-8 10-16Z"/><path d="M4 21c3-6 7-9 12-12"/></>,
    star: <path d="m12 2 3 6 7 .9-5 4.8 1.2 6.8L12 17.3l-6.2 3.2L7 13.7 2 8.9 9 8l3-6Z"/>,
    heart: <><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/><path d="M12 8v7M8.5 11.5h7"/></>,
  };
  return <svg className="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">{paths[type]}</svg>;
};

const services = [
  { title: "Skin Treatments", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=85&w=900&auto=format&fit=crop", desc: "HIFU · RF Skin Tightening · HydraFacial · Laser Hair Reduction · Acne Correction · Pigmentation Correction", to: "/skin-treatments", label: "View skin treatments" },
  { title: "Hair Treatment", img: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=85&w=900&auto=format&fit=crop", desc: "PRP Therapy · Hair Fall Assessment · Post-Pregnancy Hair Loss · PCOS & Thyroid-Related Thinning", to: "/hair-treatment", label: "View hair treatment" },
  { title: "Diet & Nutrition", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=85&w=900&auto=format&fit=crop", desc: "PCOS · Thyroid Disorders · Diabetes Support · Fatty Liver Management · Weight Management", to: "/diet-consultation", label: "View diet consultation" },
];

const reasons = [
  { icon: "star", title: "Rated 5.0 on Google", text: "Every review, from every patient." },
  { icon: "leaf", title: "Find the Cause First", text: "We treat the root cause, not just the symptoms." },
  { icon: "clock", title: "Open Every Day", text: "Seven days a week, until 8pm." },
  { icon: "pin", title: "Prime Location", text: "Easy from Airport Road, Kharar and Zirakpur." },
  { icon: "shield", title: "Honest Recommendations", text: "If a treatment won’t help, we’ll say so." },
];

const reviews = [
  ["Nikita Malhotra", "I had a really good experience at Ouransh. The staff was friendly, and the care was excellent. Definitely one of the best skin care clinics in Mohali highly recommended..."],
  ["Aayan Garg", "I had a wonderful experience at this clinic. From the moment I walked in, the staff was welcoming, friendly, and highly professional. They took the time to explain the entire procedure, answered all my questions, and made sure I felt comfortable throughout my visit."],
  ["Kaaisha", "Great experience with Ouransh Diet & Skin Care in Mohali. Professional skincare services, hygienic clinic, knowledgeable staff, and visible results. Highly recommended"],
  ["Sukhmanpreet Kaur", "Highly satisfied with the results. The products are gentle, effective, and worth every penny"],
  ["Jyoti Raturi", "Very professional staff. Dt. Shikha Garg maam k diet plans boht effective hai or unke boht ache result mile. Or unki nature bhi boht achi hai, hum kuch bhi bqar baar puch sakte hai. Highly recommended."],
  ["Diya Kumari", "I had a really good experience at Ouransh Diet & Skin Care. The staff is professional, welcoming, and genuinely attentive to your concerns. I especially liked that they take the time to understand your skin and overall needs before suggesting any treatment instead of giving a one-size-fits-all solution. The clinic is clean, comfortable, and the overall experience feels very personalized."],
  ["Poonam Bagga", "Great experience at Ouransh! Friendly staff and excellent service. Highly recommended!"],
  ["AOne QualityService", "I am really happy with this clinic. The doctors actually listen to you. Care about your skin. My acne improved a lot in a few weeks. I have tried clinics before but this one is different. They explain everything in words so you understand what they are doing. The results are real not promises."],
  ["Lovepreet Kaur", "I had a wonderful experience at the Ouransh Skin & diet. Dr. Shika is very kind and professional. She guided me the right treatment plan and their staff was very friendly. Highly recommended"],
  ["Sawamber Verma", "I had a wonderful experience at Ouransh diet & skin care. Shikha Ma'am explained everything very clearly and made me feel comfortable throughout the treatment. The clinic is clean, hygienic, and well maintained. Highly recommended!"],
  ["Richa Sharma", "I had a great experience with Dr. Shikha Garg at Shikha's Diet Clinic in Mohali. She listened carefully, understood my routine, and suggested a practical diet plan that was easy to follow. Her guidance was supportive and helped me improve my eating habits without extreme dieting. Highly recommended for anyone looking for a trusted dietitian in Mohali."],
];

export default function Home() {
  return <Layout>
    <Seo title="Diet and Skin Care Clinic in Mohali | Ouransh, Sector 117" description="Diet and skin care clinic in Mohali offering HIFU, HydraFacial, PRP, laser and personalised nutrition plans. Sector 117, open 7 days. Book a visit." />
    <section className="home-hero"><div className="container-x home-hero-grid">
      <div className="hero-copy"><span className="eyebrow">Diet · Skin · Hair · Wellness</span><h1>Your skin and hair reflect the <span>choices your body is making every day.</span></h1><p className="hero-lead"></p><p>Ouransh is a diet and skin care clinic in Mohali that combines personalised nutrition with advanced aesthetic treatments. Because acne, pigmentation and hair fall usually begin somewhere deeper than the surface.</p>
        <div className="hero-facts"><div><Icon type="pin"/><span><b>Sector 117</b>TDI South Ex-2</span></div><div><Icon type="clock"/><span><b>Open 7 Days</b>A Week</span></div><div><Icon type="clock"/><span><b>11:00 AM</b>to 8:00 PM</span></div></div>
        <div className="hero-actions"><Link to="/contact" className="btn-gold">Book a Consultation <span>→</span></Link><a href="tel:+916239557417" className="btn-outline"><Icon type="phone"/> Call 062395 57417</a></div>
      </div><div className="hero-visual"><img src={homeHeroWoman} alt="Healthy glowing skin at Ouransh clinic"/></div>
    </div></section>

    <section className="deeper-section"><div className="deeper-blob deeper-blob-one"/><div className="deeper-blob deeper-blob-two"/><div className="container-x deeper-grid"><div className="deeper-copy"><span className="eyebrow">Our combined approach <i/></span><h2>Why We Look Deeper <Icon type="leaf"/></h2><p>You can treat acne with a peel and watch it return in three months. You can take supplements for hair fall for a year without anyone ever checking whether your iron is low.</p><p>Skin and hair respond fastest when the internal cause is addressed alongside the treatment. Hormonal acne driven by PCOS. Thinning hair caused by an untreated thyroid condition. Dullness that is really a hydration and nutrition problem.</p><p>At Ouransh, our experienced dietitians and certified skin specialists work together. Your consultation looks at both sides before anything is recommended.</p><div className="deeper-bottom"><Link to="/about" className="text-link">Learn about our combined approach <span>→</span></Link><span>Real insights. Lasting results.</span></div></div><div className="deeper-features">{[["leaf","Find the Root Cause","We identify the internal triggers to treat problems at the source."],["heart","Personalised Plans","Every plan is customised for your body, goals and lifestyle."],["shield","Expert Team","Dietitians and skin specialists working together for you."],["star","Long-Term Results","Sustainable solutions for healthy skin, hair and body."]].map(([icon,title,text])=><div key={title}><span><Icon type={icon}/></span><p><b>{title}</b>{text}</p><i>›</i></div>)}</div></div></section>

    <section className="services-section"><div className="container-x"><div className="section-heading"><span className="eyebrow">Care designed around you</span><h2>What We Offer</h2><p>Clinical expertise and personalised nutrition, brought together under one roof.</p></div><div className="service-grid">{services.map((s,i)=><article className="service-card" key={s.title}><div className="service-image"><img src={s.img} alt={s.title}/></div><div className="service-body"><div className="service-title-row"><h3>{s.title}</h3></div><p>{s.desc}</p><Link to={s.to} className="service-cta"><Icon type={i===2?"leaf":i===1?"heart":"star"}/>{s.label}</Link></div></article>)}</div></div></section>

    <section className="trust-band"><div className="container-x"><h2>Why Patients Choose Ouransh</h2><div className="trust-grid">{reasons.map(r=><div key={r.title}><Icon type={r.icon}/><b>{r.title}</b><p>{r.text}</p></div>)}</div></div></section>

    <section className="reviews-section"><div className="container-x"><div className="section-heading"><span className="eyebrow">Real words, real journeys</span><h2>What Our Patients Say</h2></div><div className="reviews-layout"><div className="review-score"><strong>5.0</strong><span>★★★★★</span><small>Rated on Google</small><a href="https://www.google.com/search?q=Ouransh+Mohali+reviews" target="_blank" rel="noreferrer">Read all reviews on Google →</a></div><div className="review-marquee"><div className="review-track">{[...reviews,...reviews].map(([name,text],i)=><article key={name+i}><div className="review-top"><span>★★★★★</span><svg className="google-g" viewBox="0 0 48 48" width="20" height="20" aria-label="Google"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"/><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/></svg></div><p>“{text}”</p><strong>— {name}</strong></article>)}</div></div></div></div></section>

    <section className="visit-section"><div className="container-x"><div className="section-heading"><span className="eyebrow">We’re easy to reach</span><h2>Visit Us</h2></div><div className="visit-card"><div className="visit-details"><div><Icon type="pin"/><p><b>Ouransh</b>SCO 451 FF, TDI South Ex-2,<br/>Sector 117, Sahibzada Ajit Singh Nagar,<br/>Punjab 140301</p></div><div><Icon type="phone"/><p><b>Call us</b><a href="tel:+916239557417">062395 57417</a></p></div><div><Icon type="clock"/><p><b>Clinic hours</b>Open 7 days, 11:00 AM – 8:00 PM</p></div></div><div className="visit-map"><iframe title="Ouransh location" src="https://www.google.com/maps?q=SCO%20451%20FF%20TDI%20South%20Ex-2%20Sector%20117%20Mohali&output=embed" loading="lazy"/></div><div className="visit-actions"><a className="btn-outline" href="https://maps.google.com/?q=SCO+451+FF+TDI+South+Ex-2+Sector+117+Mohali" target="_blank" rel="noreferrer"><Icon type="pin"/> Get Directions</a><a className="btn-dark" href="https://wa.me/916239557417" target="_blank" rel="noreferrer">WhatsApp Us →</a><small>Open all days · Parking available</small></div></div></div></section>
  </Layout>;
}
