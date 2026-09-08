import { Helmet } from "react-helmet-async";

export default function Faq({ title = "Frequently Asked Questions", items }) {
  if (!items?.length) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return (
    <section className="faq-section">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <div className="faq-container">
        <h2 className="faq-title">{title}</h2>
        <div className="faq-list">
          {items.map((item, i) => (
            <div key={item.q} className="faq-item">
              <div className="faq-question">{i + 1}. {item.q}</div>
              <div className="faq-answer">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
