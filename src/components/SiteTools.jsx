import { useEffect, useState } from "react";

export default function SiteTools() {
  const [loading, setLoading] = useState(true);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 850);
    const footer = document.querySelector("footer");
    const observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting), { threshold: 0.08 });
    if (footer) observer.observe(footer);
    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className={`diet-preloader ${loading ? "is-visible" : ""}`} aria-hidden={!loading}>
        <span className="simple-spinner" />
      </div>

      <div className={`floating-contact ${footerVisible ? "over-footer" : ""}`} aria-label="Quick contact">
        <a className="float-whatsapp" href="https://wa.me/916239557417" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><img src="/whatsapp-brand.svg" alt="" /></a>
        <a className="float-call" href="tel:+916239557417" aria-label="Call Ouransh"><img src="/phone-solid.svg" alt="" /></a>
      </div>
    </>
  );
}
