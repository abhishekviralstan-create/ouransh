import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const services = [
  { label: "Skin Treatments", to: "/skin-treatments" },
  { label: "Hair Treatment", to: "/hair-treatment" },
  { label: "Diet & Nutrition", to: "/diet-consultation" },
];

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-gold ${
      isActive ? "text-gold" : "text-forest"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-creamlight/95 backdrop-blur border-b border-black/5">
      <div className="container-x flex items-center justify-between py-3">
        <Link to="/" className="flex items-center">
          <img src="/Ouransh_Logo.png" alt="Ouransh Diet and Skin Care" className="h-14 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About Us</NavLink>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-forest hover:text-gold">
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 pt-3 w-52">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-black/5">
                  {services.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="block px-4 py-3 text-sm text-forest hover:bg-cream hover:text-gold transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+916239557417"
            className="flex items-center gap-2 border border-gold/40 rounded-full px-4 py-2 text-sm text-forest hover:bg-cream"
          >
            <span>📞</span> 062395 57417
          </a>
          <Link
            to="/contact"
            className="bg-gold hover:bg-golddark text-white rounded-full px-5 py-2 text-sm font-medium transition-colors"
          >
            Book a Consultation
          </Link>
        </div>

        <button
          className="lg:hidden text-forest text-2xl"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-creamlight border-t border-black/5 px-6 py-4 flex flex-col gap-4">
          <NavLink to="/" end onClick={() => setMobileOpen(false)} className={linkClass}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMobileOpen(false)} className={linkClass}>About Us</NavLink>
          {services.map((s) => (
            <Link key={s.to} to={s.to} onClick={() => setMobileOpen(false)} className="text-sm font-medium text-forest pl-3">
              {s.label}
            </Link>
          ))}
          <NavLink to="/contact" onClick={() => setMobileOpen(false)} className={linkClass}>Contact</NavLink>
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="bg-gold text-white rounded-full px-5 py-2 text-sm font-medium text-center"
          >
            Book a Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
