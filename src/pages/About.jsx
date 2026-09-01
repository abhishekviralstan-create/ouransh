import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const info = [
  ["Founder", "Shikha Garg — Dietitian & Nutritionist"],
  ["Qualification", "Post-Graduate Diploma in Nutrition and Dietetics; trained at Ivy Healthcare, Mohali"],
  ["Location", "SCO 451 FF, TDI South Ex-2, Sector 117, Mohali"],
  ["Timings", "Open 7 days a week, 11:00 AM – 8:00 PM"],
];

const areas = [
  "Weight management",
  "PCOS and hormonal-health nutrition",
  "Thyroid-related nutrition support",
  "Diabetes and blood-sugar management support",
  "Fatty liver and metabolic health",
  "Vitamin and mineral deficiencies",
  "Nutrition for skin and hair health",
  "Lifestyle and practical meal planning",
];

const expect = [
  ["We listen first.", "I want to understand what you are concerned about, what you have already tried, what worked, what did not, and what your day-to-day life actually looks like."],
  ["We use useful information.", "Depending on your concern, recent reports such as thyroid function, vitamin D, vitamin B12, ferritin or blood sugar may help us understand your nutritional picture more clearly."],
  ["We keep recommendations practical.", "Your plan should work with your kitchen, schedule and lifestyle. Complicated plans that cannot be followed are not useful."],
  ["We are clear about expectations.", "Skin, hair and weight-related concerns rarely change overnight. I would rather give you a realistic timeline than make a promise that only sounds good."],
  ["We do not push what you do not need.", "If a treatment or programme is not suitable for your concern, we will tell you. Our focus is on appropriate care, not on selling the biggest package."],
];

export default function About() {
  return (
    <Layout>
      <Seo
        title="About Ouransh | Skin, Hair & Diet Clinic in Mohali"
        description="A personal introduction from Shikha Garg, Founder of Ouransh — Dietitian & Nutritionist bringing practical nutrition and skin care together in Sector 117, Mohali."
      />

      <section className="bg-creamlight py-14">
        <div className="container-x founder-hero">
          <div>
            <p className="text-gold text-xs tracking-[0.2em] mb-3">— ABOUT US —</p>
            <h1 className="font-serif text-4xl md:text-5xl text-forest mb-2">A personal introduction</h1>
            <p className="founder-role">from Shikha Garg, Founder of Ouransh</p>
            <div className="w-16 h-px bg-gold my-6" />
            <p className="founder-intro italic">
              "I created Ouransh to bring practical nutrition and thoughtful skin care together, so we can look beyond the surface and understand the bigger picture."
            </p>

            <dl className="mt-8 space-y-3">
              {info.map(([label, value]) => (
                <div key={label} className="flex flex-col sm:flex-row sm:gap-4 text-sm border-t border-gold/15 pt-3">
                  <dt className="w-32 shrink-0 font-semibold text-forest tracking-wide uppercase text-[11px] pt-0.5">{label}</dt>
                  <dd className="text-forest/70">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="founder-photo">
            <img
              src="/Dt.%20Sikha%20Garg.png"
              alt="Shikha Garg, Founder of Ouransh"
            />
            <div><b>Where Nutrition</b><span>Meets Aesthetics</span></div>
          </div>
        </div>
      </section>

      {/* Hi, I'm Shikha Garg */}
      <section className="py-16 bg-white">
        <div className="container-x max-w-4xl">
          <h2 className="font-serif text-3xl text-forest mb-6">Hi, I'm Shikha Garg</h2>
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
      <section className="py-16 bg-creamlight">
        <div className="container-x max-w-4xl">
          <h2 className="font-serif text-3xl text-forest mb-6">My Approach to Nutrition</h2>
          <p className="text-sm text-forest/70 leading-relaxed mb-4">
            I am a Dietitian and Nutritionist with a Post-Graduate Diploma in Nutrition and Dietetics, and I have trained at Ivy Healthcare, Mohali.
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

      {/* Areas Commonly Supported */}
      <section className="py-16 bg-white">
        <div className="container-x">
          <div className="section-heading">
            <span className="eyebrow">What I help with</span>
            <h2>Areas I Commonly Support</h2>
          </div>
          <div className="belief-grid" style={{ maxWidth: "1000px" }}>
            {areas.map((a, i) => (
              <article key={a}>
                <span>0{i + 1}</span>
                <div><h3 style={{ fontSize: "15px" }}>{a}</h3></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Diet and Skin Together */}
      <section className="py-16 bg-creamlight">
        <div className="container-x max-w-4xl">
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
      <section className="py-16 bg-white">
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

      {/* No Unrealistic Promises */}
      <section className="py-16 bg-creamlight">
        <div className="container-x max-w-4xl">
          <div className="founder-quote" style={{ background: "#173328", borderRadius: "18px", padding: "40px" }}>
            <span>"</span>
            <p style={{ marginBottom: "14px" }}>
              We do not promise a fixed number of kilograms in a fixed number of days, and we do not guarantee instant skin or hair results. Age, health conditions, hormones, medications, lifestyle, stress, sleep and your starting point all influence progress.
            </p>
            <p style={{ position: "relative", color: "rgba(255,255,255,.8)", fontStyle: "normal", fontSize: "13px" }}>
              Our focus is on changes that are practical, responsible and sustainable.
            </p>
          </div>
        </div>
      </section>

      {/* Clinic where you can ask questions */}
      <section className="py-16 bg-white">
        <div className="container-x max-w-4xl">
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
      <section className="py-16 bg-creamlight">
        <div className="container-x max-w-4xl">
          <h2 className="font-serif text-3xl text-forest mb-6">What We Don't Do</h2>
          <p className="text-sm text-forest/70 leading-relaxed mb-4">
            We do not perform hair transplants. Hair transplantation is a surgical procedure and should be handled by an appropriately qualified transplant surgeon. If your hair loss has reached a stage where surgical treatment may be appropriate, we will be honest about that.
          </p>
          <p className="text-sm text-forest/70 leading-relaxed">
            We also do not publish unrealistic kilo promises or guaranteed timelines. Every person is different, and responsible care should reflect that.
          </p>
        </div>
      </section>

      {/* Visit Ouransh */}
      <section className="py-16 bg-white">
        <div className="container-x about-commitment">
          <div>
            <span className="eyebrow">Visit Ouransh in Mohali</span>
            <h2>Ouransh Diet &amp; Skin Care Clinic</h2>
            <p>
              SCO 451 FF, TDI South Ex-2, Sector 117, Mohali — just off Airport Road, accessible from Kharar, New Chandigarh, Zirakpur and central Mohali.<br />
              Open 7 days a week, 11:00 AM – 8:00 PM.
            </p>
          </div>
          <div>
            <Link to="/contact" className="btn-gold">Book a Consultation →</Link>
            <a href="tel:+916239557417" className="btn-outline">Call 062395 57417</a>
          </div>
        </div>
      </section>

      <section className="py-14 bg-creamlight">
        <div className="container-x max-w-2xl text-center">
          <p className="font-serif italic text-lg text-forest/80 mb-3">
            "Sometimes the best place to start is simply understanding what your body actually needs."
          </p>
          <p className="text-gold text-sm font-medium">— Shikha Garg</p>
          <p className="text-forest/60 text-xs mt-1">Founder, Ouransh Diet &amp; Skin Care Clinic</p>
        </div>
      </section>
    </Layout>
  );
}
