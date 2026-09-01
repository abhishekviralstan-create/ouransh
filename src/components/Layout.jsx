import Navbar from "./Navbar";
import Footer from "./Footer";
import SiteTools from "./SiteTools";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Layout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const main = document.querySelector("main");
      const heroCopy = main?.querySelector("section:first-of-type .container-x > div:first-child");
      const heroVisual = main?.querySelector("section:first-of-type .container-x > img, section:first-of-type .founder-photo, .hero-visual");
      heroCopy?.setAttribute("data-aos", "fade-right");
      heroVisual?.setAttribute("data-aos", "fade-left");
      main?.querySelectorAll("section:not(:first-of-type) > .container-x").forEach((element, index) => {
        element.setAttribute("data-aos", "fade-up");
        element.setAttribute("data-aos-delay", String((index % 3) * 60));
      });
      main?.querySelectorAll(".service-card, .trust-grid > div").forEach((element, index) => {
        element.setAttribute("data-aos", "fade-up");
        element.setAttribute("data-aos-delay", String((index % 5) * 85));
      });
      AOS.init({ duration: 900, easing: "ease-out-cubic", once: false, offset: 110 });
      AOS.refreshHard();
    }, 950);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={`flex-1 pt-[76px] page-${pathname === "/" ? "home" : pathname.slice(1)}`}>{children}</main>
      <Footer />
      <SiteTools />
    </div>
  );
}
