import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { treatments } from "./SkinTreatments";
import { hairServiceCards } from "./HairTreatment";
import { conditions } from "./DietConsultation";

const allServices = [
  ...treatments.map((t) => ({ key: `skin-${t.slug}`, to: `/skin-treatments/${t.slug}`, img: t.img, title: t.shortTitle, summary: t.summary, category: "Ouransh Skin Care" })),
  ...hairServiceCards.map((s) => ({ key: `hair-${s.slug}`, to: `/hair-treatment/${s.slug}`, img: s.img, title: s.title, summary: s.summary, category: "Ouransh Hair Care" })),
  ...conditions.map((c) => ({ key: `diet-${c.id}`, to: `/diet-consultation/${c.id}`, img: c.img, title: c.shortTitle, summary: c.paras[0], category: "Ouransh Nutrition" })),
];

const info = [
  ["Founder", "Dr. Shikha Garg — Clinic Dietitian & Aesthetic Expert"],
  ["Qualification", "DDHN, PGDDN, PGDBA, M.A. (PSY.), DIPBNC, CERT. PROF. ESTH & Skin Care, FMC, F/Ship in Med. Cosmetology"],
];

const expect = [
  ["We listen first.", "I want to understand what you are concerned about, what you have already tried, what worked, what did not, and what your day-to-day life actually looks like."],
  ["We use useful information.", "Depending on your concern, recent reports such as thyroid function, vitamin D, vitamin B12, ferritin or blood sugar may help us understand your nutritional picture more clearly."],
  ["We keep recommendations practical.", "Your plan should work with your kitchen, schedule and lifestyle. Complicated plans that cannot be followed are not useful."],
  ["We are clear about expectations.", "Skin, hair and weight-related concerns rarely change overnight. I would rather give you a realistic timeline than make a promise that only sounds good."],
  ["We do not push what you do not need.", "If a treatment or programme is not suitable for your concern, we will tell you. Our focus is on appropriate care, not on selling the biggest package."],
];

export default function About() {
  const signatureRef = useRef(null);
  const [signatureVisible, setSignatureVisible] = useState(false);

  useEffect(() => {
    const signature = signatureRef.current;
    if (!signature) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      setSignatureVisible(entry.isIntersecting);
    }, { threshold: 0.2, rootMargin: "0px 0px -8% 0px" });

    observer.observe(signature);
    return () => observer.disconnect();
  }, []);
  return (
    <Layout>
      <Seo
        title="About Ouransh | Skin, Hair & Diet Clinic in Mohali"
        description="A personal introduction from Dr. Shikha Garg, Founder of Ouransh — Clinic Dietitian & Aesthetic Expert bringing practical nutrition and skin care together in Sector 117, Mohali."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "About Us" }]}
        schema={[
          { "@type": "AboutPage", name: "About Ouransh", url: "https://ouransh.in/about" },
          { "@type": "Person", name: "Dr. Shikha Garg", jobTitle: "Clinic Dietitian & Aesthetic Expert", worksFor: { "@type": "MedicalBusiness", name: "Ouransh Diet and Skin Care" }, url: "https://ouransh.in/about" },
        ]}
      />

      <section className="about-hero">
        <div className="container-x founder-hero">
          <div>
            <span className="skin-showcase-eyebrow">About Us</span>
            <h1 className="font-serif text-4xl md:text-5xl text-forest mb-2">A personal introduction</h1>
            <p className="founder-role">from Dr. Shikha Garg, Clinic Dietitian &amp; Aesthetic Expert</p>

            <div className="about-hero-quote">
              <span aria-hidden="true">“</span>
              <p className="founder-intro">
                I created Ouransh to bring practical nutrition and thoughtful skin care together, so we can look beyond the surface and understand the bigger picture.
              </p>
            </div>

            <dl className="about-hero-info about-hero-info-single">
              {info.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="founder-photo">
            <img
              src="/dr-shikha-garg.webp"
              alt="Dr. Shikha Garg, Founder of Ouransh"
            />
          </div>
        </div>
      </section>

      {/* Hi, I'm Shikha Garg */}
      <section className="about-content-section">
        <div className="container-x max-w-4xl about-content-card">
          <h2 className="font-serif text-3xl text-forest mb-6">Hi, I'm Dr. Shikha Garg</h2>
          <p className="text-sm text-forest/70 leading-relaxed mb-4">
            I'm the founder of Ouransh Diet &amp; Skin Care Clinic in Mohali.
          </p>
          <p className="text-sm text-forest/70 leading-relaxed mb-4">
            I started Ouransh with a simple belief: good health, nutrition and skin care should not always be treated as completely separate things. Very often, what we see on the outside can be connected to what is happening inside the body.
          </p>
          <p className="text-sm text-forest/70 leading-relaxed mb-4">
            Over the years, while working with people on weight management, PCOS, thyroid-related concerns, diabetes support, fatty liver and other lifestyle issues, I kept noticing the same pattern. Someone would come because their weight was not moving, but thyroid or hormonal factors also needed attention. Someone else might be struggling with acne, hair fall or dull skin while nutrition, lifestyle or deficiencies were part of the wider picture.
          </p>
          <p className="text-sm text-forest/70 leading-relaxed">
            That experience is one of the main reasons I created Ouransh: a place where we can look at your concerns more completely and build a plan around you, not around a standard template.
          </p>
        </div>
      </section>

      {/* My Approach to Nutrition */}
      <section className="about-content-section">
        <div className="container-x max-w-4xl about-content-card">
          <h2 className="font-serif text-3xl text-forest mb-6">My Approach to Nutrition</h2>
          <p className="text-sm text-forest/70 leading-relaxed mb-4">
            I am a Clinic Dietitian and Aesthetic Expert with qualifications in nutrition, psychology, professional esthetics, skin care and medical cosmetology.
          </p>
          <p className="text-sm text-forest/70 leading-relaxed mb-4">
            I do not believe in giving the same diet chart to everyone. Before creating a plan, I like to understand your medical history, current medications, reports, work schedule, food preferences, family routine and what you can realistically maintain.
          </p>
          <p className="text-sm text-forest/70 leading-relaxed mb-4">
            A diet can look perfect on paper, but if it does not fit your real life, it will not work for long.
          </p>
          <p className="text-sm text-forest/70 leading-relaxed">
            My goal is to create practical plans using foods you know and enjoy. Punjabi households do not need to suddenly run on quinoa and avocado. We can work with familiar home-cooked food and focus on portions, combinations, timings and choices that suit your health goals.
          </p>
        </div>
      </section>

      {/* Our Services */}
      <section className="skin-services-section about-services-section">
        <div className="container-x">
          <div className="section-heading">
            <span className="eyebrow">What we offer</span>
            <h2>Our Services</h2>
            <p>Select any service to see complete details.</p>
          </div>
          <div className="skin-service-grid">
            {allServices.map((s) => (
              <Link key={s.key} to={s.to} className="skin-service-card">
                <div className="skin-service-image"><img src={s.img} alt={s.title} /></div>
                <div className="skin-service-card-body">
                  <span>{s.category}</span>
                  <h2>{s.title}</h2>
                  <p>{s.summary}</p>
                  <b>Explore Service <i>→</i></b>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Diet and Skin Together */}
      <section className="about-content-section">
        <div className="container-x max-w-4xl about-content-card">
          <h2 className="font-serif text-3xl text-forest mb-6">Why Diet and Skin Care Together?</h2>
          <p className="text-sm text-forest/70 leading-relaxed mb-4">
            At Ouransh, we bring nutrition support and skin care together under one roof because the two can sometimes overlap.
          </p>
          <p className="text-sm text-forest/70 leading-relaxed mb-4">
            This does not mean every skin problem comes from diet. Some concerns genuinely need appropriate skin treatment, medical evaluation or specialist care, and we are clear about that. But nutrition, hormones, lifestyle, sleep and deficiencies can sometimes influence concerns such as acne, hair fall, dullness and overall skin health.
          </p>
          <p className="text-sm text-forest/70 leading-relaxed">
            Instead of looking only at what is visible, we try to understand the bigger picture where it is relevant. The goal is not to overcomplicate your care. It is to avoid overlooking something important.
          </p>
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="about-expect-section">
        <div className="container-x">
          <div className="section-heading">
            <span className="eyebrow">Your first visit and beyond</span>
            <h2>What You Can Expect at Ouransh</h2>
          </div>
          <div className="belief-grid" style={{ maxWidth: "1000px" }}>
            {expect.map(([title, text], i) => (
              <article key={title}>
                <span>0{i + 1}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic where you can ask questions */}
      <section className="about-content-section">
        <div className="container-x max-w-4xl about-content-card">
          <h2 className="font-serif text-3xl text-forest mb-6">A Clinic Where You Can Ask Questions</h2>
          <p className="text-sm text-forest/70 leading-relaxed mb-4">
            I wanted Ouransh to feel different from a place where you simply walk in, take a package and leave. I want you to understand why something is being recommended and feel comfortable asking questions about your diet, skin, hair, lifestyle or treatment options.
          </p>
          <p className="text-sm text-forest/70 leading-relaxed">
            Our clinic is designed to be clean, private and comfortable, so you can discuss your concerns openly and make informed decisions about your care.
          </p>
        </div>
      </section>

      {/* What We Don't Do */}
      <section className="about-content-section">
        <div className="container-x max-w-4xl about-content-card">
          <h2 className="font-serif text-3xl text-forest mb-6">What We Don't Do</h2>
          <p className="text-sm text-forest/70 leading-relaxed mb-4">
            We do not perform hair transplants. Hair transplantation is a surgical procedure and should be handled by an appropriately qualified transplant surgeon. If your hair loss has reached a stage where surgical treatment may be appropriate, we will be honest about that.
          </p>
          <p className="text-sm text-forest/70 leading-relaxed">
            We also do not publish unrealistic kilo promises or guaranteed timelines. Every person is different, and responsible care should reflect that.
          </p>
        </div>
      </section>

      <section className="founder-signoff">
        <div className="container-x max-w-4xl">
          <div className="founder-signoff-card text-center">
            <span className="founder-signoff-mark" aria-hidden="true">“</span>
          <p className="founder-quote-text">
            "Sometimes the best place to start is simply understanding what your body actually needs."
          </p>
          <p ref={signatureRef} className={`founder-quote-signature${signatureVisible ? " is-signing" : ""}`}><span>Dr. Shikha Garg</span></p>
          <p className="founder-quote-role">Founder, Ouransh Diet &amp; Skin Care Clinic</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
