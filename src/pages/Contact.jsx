import { useState } from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import contactHeroBanner from "../assets/contact-hero-banner.png";

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

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = [
      "Hello Ouransh, I would like to book a consultation.",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Consultation for: ${form.topic}`,
      `Message: ${form.message || "Not provided"}`,
    ].join("\n");
    window.open(`https://wa.me/916239557417?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <Layout>
      <Seo
        title="Contact Ouransh | Skin & Diet Clinic Sector 117 Mohali"
        description="Visit Ouransh for skin, hair and diet consultations at SCO 451 FF, TDI South Ex-2, Sector 117, Mohali. Open 7 days, 11am–8pm. Call 062395 57417."
      />

      <section className="skin-banner contact-banner">
        <img className="skin-banner-bg" src={contactHeroBanner} alt="A warm welcome at Ouransh clinic reception" />
        <div className="container-x skin-banner-inner">
          <div className="skin-banner-content contact-banner-content">
            <span className="eyebrow">We'd love to see you</span>
            <h1>Visit Ouransh in <em>Sector 117, Mohali</em></h1>
            <p className="skin-banner-description">
              We're here to help you look and feel your best — inside and out. Visit our clinic for expert care in skin, hair and nutrition, all under one roof.
            </p>
            <div className="skin-banner-contact">
              <a href="tel:+916239557417"><span aria-hidden="true">☎</span> Call 062395 57417</a>
              <a href="https://maps.google.com/?q=SCO+451+FF+TDI+South+Ex-2+Sector+117+Mohali" target="_blank" rel="noreferrer">Get Directions →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info py-16 bg-white">
        <div className="container-x">
          <div className="section-heading" style={{ marginBottom: "32px" }}>
            <span className="eyebrow">Reach out anytime</span>
            <h2>Contact Information</h2>
          </div>

          <div className="contact-card-grid">
            {cards.map((c) => (
              <article key={c.title} className={`contact-detail-card contact-detail-${c.icon}`}>
                <div className="contact-detail-icon">
                  <Icon type={c.icon} />
                </div>
                <div>
                  <span className="contact-detail-label">Contact detail</span>
                  <h3>{c.title}</h3>
                  {c.href ? <a href={c.href}>{c.body}</a> : <p>{c.body}</p>}
                </div>
              </article>
            ))}
          </div>

          <div className="contact-action-bar">
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

      <section className="contact-combined-section py-16 bg-white">
        <div className="container-x contact-combined-grid">
          <div className="booking-shell">
            <div className="booking-form-panel">
              <div className="booking-form-heading">
                <span className="eyebrow">Get in touch</span>
                <h2>Book a Consultation</h2>
                <p>Fill in your details and continue directly on WhatsApp.</p>
              </div>
              <form onSubmit={handleSubmit} className="booking-form">
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
                  Continue on WhatsApp →
                </button>
                <p className="text-xs text-forest/50 text-center">
                  Your details will open as a ready-to-send WhatsApp message.
                </p>
              </form>
            </div>
          </div>
          <div className="getting-side">
            <div className="getting-heading">
              <span className="eyebrow">How to find us</span>
              <h2>Getting Here</h2>
              <p>We are in TDI South Ex-2, just off Airport Road in Sector 117. Roughly 10 minutes from Kharar, 15 from New Chandigarh, and easily reached from Zirakpur and central Mohali. Parking is available outside.</p>
            </div>
            <div className="getting-map">
              <iframe
                title="Ouransh location map"
                loading="lazy"
                src="https://www.google.com/maps?q=SCO%20451%20FF%20TDI%20South%20Ex-2%20Sector%20117%20Mohali&output=embed"
              />
            </div>
            <div className="getting-side-footer">
              <span><Icon type="pin" /> Sector 117, Mohali</span>
              <a href="https://maps.google.com/?q=SCO+451+FF+TDI+South+Ex-2+Sector+117+Mohali" target="_blank" rel="noreferrer">Open in Maps →</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
