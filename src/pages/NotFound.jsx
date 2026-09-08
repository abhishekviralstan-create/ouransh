import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <Layout>
      <Seo title="Page Not Found | Ouransh" description="The page you're looking for doesn't exist. Explore Ouransh's skin, hair and nutrition services in Mohali instead." noindex />
      <section className="py-24 bg-creamlight">
        <div className="container-x max-w-2xl text-center">
          <p className="text-gold text-xs tracking-[0.2em] mb-3">— 404 —</p>
          <h1 className="font-serif text-4xl md:text-5xl text-forest mb-4">Page Not Found</h1>
          <p className="text-sm text-forest/70 leading-relaxed mb-8">
            The page you're looking for doesn't exist or may have moved. Explore our skin, hair and nutrition services below, or head back to the homepage.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/" className="btn-gold">Back to Home →</Link>
            <Link to="/skin-treatments" className="btn-outline">Skin Treatments</Link>
            <Link to="/hair-treatment" className="btn-outline">Hair Treatment</Link>
            <Link to="/diet-consultation" className="btn-outline">Diet &amp; Nutrition</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
