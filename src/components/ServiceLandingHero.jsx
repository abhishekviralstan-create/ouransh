import { Link } from "react-router-dom";
import BeforeAfterSlider from "./BeforeAfterSlider";

function HeroIcon({ type }) {
  if (type === "person") return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7" r="3.5"/><path d="M5.5 20v-2.5a6.5 6.5 0 0 1 13 0V20z"/></svg>;
  if (type === "shield") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5 19 5v5.5c0 4.8-2.8 8.7-7 11-4.2-2.3-7-6.2-7-11V5z"/><path d="m9 12 2 2 4-4"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4C11 4 5 8.5 5 15c0 2.5 1.7 4 4 4 6.5 0 10-6 11-15Z"/><path d="M4 21c3.5-6 7.5-9.5 12-12"/></svg>;
}

export default function ServiceLandingHero({ eyebrow, title, description, service, buttonLabel, image, imageAlt, comparisonSrc, comparisonTitle, features, backTo, backLabel }) {
  return <section className="skin-banner skin-showcase service-showcase"><div className="container-x skin-banner-inner skin-banner-grid"><div className="skin-banner-content">{backTo && <Link to={backTo} className="skin-detail-back">← {backLabel}</Link>}<span className="skin-showcase-eyebrow">{eyebrow}</span><h1>{title}</h1><p className="skin-banner-description">{description}</p><div className="skin-banner-contact"><Link to={`/contact?service=${service}`}>{buttonLabel} <span aria-hidden="true">→</span></Link><a href="tel:+916239557417"><span aria-hidden="true">☎</span> 062395 57417</a></div><div className="skin-showcase-features">{features.map((feature) => <div key={feature.label}><span><HeroIcon type={feature.icon} /></span><p>{feature.label}</p></div>)}</div></div><div className={`skin-showcase-visual service-showcase-visual${comparisonSrc ? " service-comparison-visual" : ""}`}>{comparisonSrc ? <BeforeAfterSlider src={comparisonSrc} title={comparisonTitle} /> : <img src={image} alt={imageAlt} />}</div></div></section>;
}
