import { useState } from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const Icon = ({ type }) => {
  const paths = {
    pin: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.7 2Z" />,
  };
  return <svg className="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">{paths[type]}</svg>;
};

const cards = [
  { icon: "pin", title: "Address", body: "Ouransh, SCO 451 FF, TDI South Ex-2, Sector 117, Sahibzada Ajit Singh Nagar, Punjab 140301" },
  { icon: "phone", title: "Phone", body: "062395 57417", href: "tel:+916239557417" },
  { icon: "clock", title: "Hours", body: "Open 7 days a week, 11:00 AM – 8:00 PM" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", topic: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      <Seo
        title="Contact Ouransh | Skin & Diet Clinic Sector 117 Mohali"
        description="Visit Ouransh for skin, hair and diet consultations at SCO 451 FF, TDI South Ex-2, Sector 117, Mohali. Open 7 days, 11am–8pm. Call 062395 57417."
      />

      <section className="bg-cream py-14">
        <div className="container-x grid lg:grid-cols-[.8fr_1.2fr] gap-10 items-center">
          <div>
            <span className="eyebrow">We'd love to see you</span>
            <h1 className="font-serif text-4xl md:text-5xl text-forest mt-2 mb-3">
              Visit Ouransh in <span className="text-gold">Sector 117, Mohali</span>
            </h1>
            <p className="text-sm text-forest/70 leading-relaxed">
              We're here to help you look and feel your best — inside and out. Visit our clinic for expert care in skin, hair and nutrition, all under one roof.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=85&w=1100&auto=format&fit=crop"
            alt="Ouransh clinic reception"
            className="hero-portrait"
          />
        </div>
      </section>

      <section className="contact-info py-16 bg-white">
        <div className="container-x">
          <div className="section-heading" style={{ marginBottom: "32px" }}>
            <span className="eyebrow">Reach out anytime</span>
            <h2>Contact Information</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 md:gap-7">
            {cards.map((c) => (
              <div key={c.title} className="bg-creamlight rounded-xl p-6 md:p-7">
                <div className="service-icon" style={{ position: "static", marginBottom: "16px" }}>
                  <Icon type={c.icon} />
                </div>
                <h3 className="font-serif text-lg text-forest mb-2">{c.title}</h3>
                {c.href ? (
                  <a href={c.href} className="text-sm text-forest/70 hover:text-gold">{c.body}</a>
                ) : (
                  <p className="text-sm text-forest/70 leading-relaxed">{c.body}</p>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              className="btn-outline"
              href="https://maps.google.com/?q=SCO+451+FF+TDI+South+Ex-2+Sector+117+Mohali"
              target="_blank"
              rel="noreferrer"
            >
              <Icon type="pin" /> Get Directions
            </a>
            <a className="btn-outline" href="tel:+916239557417">
              <Icon type="phone" /> Call Now
            </a>
            <a className="btn-dark" href="https://wa.me/916239557417" target="_blank" rel="noreferrer">
              WhatsApp Us →
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-creamlight">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <span className="eyebrow">How to find us</span>
            <h2 className="font-serif text-2xl md:text-3xl text-forest mt-2 mb-3">Getting Here</h2>
            <p className="text-sm text-forest/70 leading-relaxed">
              We are in TDI South Ex-2, just off Airport Road in Sector 117. Roughly 10 minutes from Kharar, 15 from New Chandigarh, and easily reached from Zirakpur and central Mohali. Parking is available outside.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden h-64 md:h-80 shadow-sm border border-gold/15">
            <iframe
              title="Ouransh location map"
              className="w-full h-full border-0"
              loading="lazy"
              src="https://www.google.com/maps?q=SCO%20451%20FF%20TDI%20South%20Ex-2%20Sector%20117%20Mohali&output=embed"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-x">
          <div className="bg-creamlight rounded-2xl p-6 sm:p-8 md:p-10 max-w-2xl mx-auto">
            <div className="section-heading" style={{ marginBottom: "28px" }}>
              <span className="eyebrow">Get in touch</span>
              <h2>Book a Consultation</h2>
            </div>
            {sent ? (
              <p className="text-center text-forest text-sm py-8">
                Thank you — we've received your request and will reply the same day.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="border border-forest/20 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:border-gold"
                  />
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="border border-forest/20 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:border-gold"
                  />
                </div>
                <select
                  name="topic"
                  value={form.topic}
                  onChange={handleChange}
                  required
                  className="w-full border border-forest/20 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:border-gold"
                >
                  <option value="">What would you like to discuss?</option>
                  <option value="skin">Skin</option>
                  <option value="hair">Hair</option>
                  <option value="diet">Diet</option>
                  <option value="combination">Combination</option>
                </select>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={4}
                  className="w-full border border-forest/20 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:border-gold"
                />
                <button type="submit" className="btn-gold w-full">
                  Book →
                </button>
                <p className="text-xs text-forest/50 text-center">
                  We reply the same day. For anything urgent, call or WhatsApp us directly.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
