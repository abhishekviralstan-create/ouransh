import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const services = [
  { label: "Skin Treatments", to: "/skin-treatments" },
  { label: "Hair Treatment", to: "/hair-treatment" },
  { label: "Diet & Nutrition", to: "/diet-consultation" },
];

const skinServices = [
  { label: "HIFU", to: "/skin-treatments/hifu" },
  { label: "RF Skin Tightening", to: "/skin-treatments/rf-skin-tightening" },
  { label: "HydraFacial", to: "/skin-treatments/hydrafacial" },
  { label: "Laser Hair Reduction", to: "/skin-treatments/laser-hair-reduction" },
  { label: "Acne Correction", to: "/skin-treatments/acne-correction" },
  { label: "Pigmentation Correction", to: "/skin-treatments/pigmentation-correction" },
];

const hairServices = [
  { label: "GFC Treatment", to: "/hair-treatment/gfc-treatment" },
  { label: "PRP Therapy", to: "/hair-treatment/prp-therapy" },
  { label: "Hair Fall Causes", to: "/hair-treatment/hair-fall-causes" },
];

const dietServices = [
  { label: "PCOS", to: "/diet-consultation/pcos" },
  { label: "Thyroid Disorders", to: "/diet-consultation/thyroid-disorders" },
  { label: "Diabetes Support", to: "/diet-consultation/diabetes-support" },
  { label: "Fatty Liver", to: "/diet-consultation/fatty-liver" },
  { label: "Weight Management", to: "/diet-consultation/weight-management" },
];

const serviceGroups = services.map((service, index) => ({
  ...service,
  children: [skinServices, hairServices, dietServices][index],
}));

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServiceGroup, setMobileServiceGroup] = useState(null);
  const [pastHero, setPastHero] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const updateNavbar = () => {
      setPastHero(window.scrollY > 10);
    };
    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });
    window.addEventListener("resize", updateNavbar);
    const timer = window.setTimeout(updateNavbar, 100);
    return () => {
      window.removeEventListener("scroll", updateNavbar);
      window.removeEventListener("resize", updateNavbar);
      window.clearTimeout(timer);
    };
  }, [pathname]);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-gold ${
      isActive ? "text-gold" : "text-forest"
    }`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ${pastHero || mobileOpen ? "bg-creamlight/95 backdrop-blur border-b border-black/5 shadow-sm" : "bg-transparent border-b border-transparent"}`}>
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
              <div className="absolute top-full left-0 pt-3 w-72">
                <div className="bg-white shadow-lg rounded-lg border border-black/5">
                  <div className="nav-service-parent relative">
                    <Link to="/skin-treatments" className="flex items-center justify-between px-4 py-3 text-sm text-forest hover:bg-cream hover:text-gold transition-colors">
                      Skin Treatments <span className="text-gold">›</span>
                    </Link>
                    <div className="nav-service-submenu absolute left-full top-0 pl-2 w-64">
                      <div className="overflow-hidden rounded-lg border border-black/5 bg-white shadow-xl">
                        {skinServices.map((s) => <Link key={s.to} to={s.to} className="block px-4 py-3 text-sm text-forest/80 hover:bg-cream hover:text-gold transition-colors">{s.label}</Link>)}
                      </div>
                    </div>
                  </div>
                  {serviceGroups.slice(1).map((group) => <div key={group.to} className="nav-service-parent relative">
                    <Link to={group.to} className="flex items-center justify-between px-4 py-3 text-sm text-forest hover:bg-cream hover:text-gold transition-colors">{group.label} <span className="text-gold">›</span></Link>
                    <div className="nav-service-submenu absolute left-full top-0 pl-2 w-64"><div className="overflow-hidden rounded-lg border border-black/5 bg-white shadow-xl">
                      {group.children.map((s) => <Link key={s.to} to={s.to} className="block px-4 py-3 text-sm text-forest/80 hover:bg-cream hover:text-gold transition-colors">{s.label}</Link>)}
                    </div></div>
                  </div>)}
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
          <div>
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center justify-between w-full text-sm font-medium text-forest"
            >
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transform: servicesOpen ? "rotate(180deg)" : "none", transition: "transform .2s" }}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="mobile-service-groups">
                {serviceGroups.map((group) => {
                  const groupOpen = mobileServiceGroup === group.to;
                  return <div key={group.to} className={`mobile-service-group${groupOpen ? " is-open" : ""}`}>
                    <div className="mobile-service-group-head">
                      <Link to={group.to} onClick={() => { setMobileOpen(false); setServicesOpen(false); setMobileServiceGroup(null); }}>{group.label}</Link>
                      <button type="button" onClick={() => setMobileServiceGroup(groupOpen ? null : group.to)} aria-expanded={groupOpen} aria-label={`${groupOpen ? "Close" : "Open"} ${group.label} services`}>
                        <span aria-hidden="true">⌄</span>
                      </button>
                    </div>
                    {groupOpen && <div className="mobile-service-children">
                      {group.children.map((s) => <Link key={s.to} to={s.to} onClick={() => { setMobileOpen(false); setServicesOpen(false); setMobileServiceGroup(null); }}>{s.label}</Link>)}
                    </div>}
                  </div>;
                })}
              </div>
            )}
          </div>
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
