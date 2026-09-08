import { Link } from "react-router-dom";

export default function ServiceCta({ eyebrow, title, copy, service, buttonLabel }) {
  return <section className="skin-final-cta"><div className="container-x skin-final-cta-inner"><span className="skin-cta-mark" aria-hidden="true">✦</span><p className="skin-cta-eyebrow">{eyebrow}</p><h2>{title}</h2><p className="skin-cta-copy">{copy}</p><div className="skin-cta-actions"><Link to={`/contact?service=${service}`}>{buttonLabel} <span>→</span></Link><a href="tel:+916239557417"><span aria-hidden="true">☎</span><span><small>Speak with our team</small>062395 57417</span></a></div></div></section>;
}
