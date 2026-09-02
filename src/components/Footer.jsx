import { Link } from "react-router-dom";

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0 mt-0.5">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 22v-9h3l.45-3.5H13.5V7.27c0-1.01.28-1.7 1.74-1.7H17.1V2.44c-.32-.04-1.43-.14-2.72-.14-2.69 0-4.53 1.64-4.53 4.66V9.5H6.8V13h3.05v9h3.65Z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm-.18 1.8A3.22 3.22 0 0 0 3.8 7.02v9.96a3.22 3.22 0 0 0 3.22 3.22h9.96a3.22 3.22 0 0 0 3.22-3.22V7.02a3.22 3.22 0 0 0-3.22-3.22H7.02ZM12 7.15A4.85 4.85 0 1 1 12 16.85 4.85 4.85 0 0 1 12 7.15Zm0 1.8a3.05 3.05 0 1 0 0 6.1 3.05 3.05 0 0 0 0-6.1Zm5.08-3.25a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26Z" />
    </svg>
  );
}
function WhatsappIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M12.04 2a9.84 9.84 0 0 0-8.5 14.78L2.1 22l5.34-1.4A9.96 9.96 0 1 0 12.04 2Zm0 18.14a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.17.83.85-3.08-.2-.32a8.16 8.16 0 1 1 6.98 3.89Zm4.48-6.1c-.25-.12-1.46-.72-1.68-.8-.23-.09-.39-.13-.56.12-.16.25-.63.8-.78.96-.14.17-.28.19-.53.07-.24-.13-1.03-.38-1.96-1.21a7.32 7.32 0 0 1-1.36-1.7c-.14-.24-.01-.37.11-.5.11-.11.25-.28.37-.43.12-.14.16-.24.24-.4.08-.17.04-.31-.02-.44-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.66.3-.22.25-.86.85-.86 2.06 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.24 3.75.59.26 1.05.41 1.42.52.59.19 1.13.16 1.55.1.48-.07 1.46-.6 1.67-1.17.2-.58.2-1.07.14-1.17-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}
const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const serviceLinks = [
  { label: "Skin Treatments", to: "/skin-treatments" },
  { label: "Hair Treatment", to: "/hair-treatment" },
  { label: "Diet & Nutrition", to: "/diet-consultation" },
  { label: "Consultation", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="ouransh-footer bg-forest text-white pt-14 pb-8">
      <div className="container-x grid grid-cols-2 md:grid-cols-6 gap-y-10 gap-x-6">
        <div className="col-span-2 md:col-span-2">
          <Link to="/" className="inline-block mb-4">
            <img src="/Ouransh_Logo.png" alt="Ouransh Diet and Skin Care" className="footer-logo h-14 w-auto" />
          </Link>
          <p className="text-sm text-white/50 leading-relaxed max-w-xs">
            Treating the cause, not the symptom. Where science, nutrition and skin care come together for real, lasting results.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="https://www.facebook.com/p/Ouransh-61589984794594/" target="_blank" rel="noreferrer" aria-label="Ouransh on Facebook" className="social-brand w-10 h-10 rounded-full border border-gold/50 text-gold flex items-center justify-center hover:bg-gold hover:text-forest transition-colors">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/ouransh25/" target="_blank" rel="noreferrer" aria-label="Ouransh on Instagram" className="social-brand w-10 h-10 rounded-full border border-gold/50 text-gold flex items-center justify-center hover:bg-gold hover:text-forest transition-colors">
              <InstagramIcon />
            </a>
            <a href="https://wa.me/916239557417" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="social-brand w-10 h-10 rounded-full border border-gold/50 text-gold flex items-center justify-center hover:bg-gold hover:text-forest transition-colors">
              <WhatsappIcon />
            </a>
          </div>
        </div>

        <div className="md:border-l md:border-white/10 md:pl-6">
          <h4 className="text-gold font-serif text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-white/70">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="hover:text-gold flex items-center gap-1">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:border-l md:border-white/10 md:pl-6">
          <h4 className="text-gold font-serif text-lg mb-4">Our Services</h4>
          <ul className="space-y-2.5 text-sm text-white/70">
            {serviceLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="hover:text-gold">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:border-l md:border-white/10 md:pl-6">
          <h4 className="text-gold font-serif text-lg mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-3">
              <span className="text-gold"><PhoneIcon /></span>
              <a href="tel:+916239557417" className="hover:text-gold">062395 57417</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-gold"><MailIcon /></span>
              <a href="mailto:hello@ouransh.com" className="hover:text-gold">hello@ouransh.com</a>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold"><PinIcon /></span>
              <span>SCO 451 FF, TDI South Ex-2,<br />Sector 117, Mohali,<br />Punjab 140301</span>
            </li>
          </ul>
        </div>

        <div className="md:border-l md:border-white/10 md:pl-6">
          <h4 className="text-gold font-serif text-lg mb-4">Hours</h4>
          <p className="text-sm text-white/70 leading-relaxed">Monday – Sunday<br />11:00 AM – 8:00 PM</p>
          <div className="w-10 h-px bg-white/15 my-3" />
          <p className="text-gold text-sm">Open All Days</p>
        </div>
      </div>

      <div className="container-x footer-bottom border-t border-white/10 mt-10 pt-5">
        <p className="text-xs text-white/40 text-center md:text-left">
          © {new Date().getFullYear()} Ouransh Diet and Skin Care. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
