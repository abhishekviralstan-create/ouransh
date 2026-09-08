import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SkinTreatments from "./pages/SkinTreatments";
import SkinServiceDetail from "./pages/SkinServiceDetail";
import HairTreatment from "./pages/HairTreatment";
import DietConsultation from "./pages/DietConsultation";
import HairServiceDetail from "./pages/HairServiceDetail";
import DietServiceDetail from "./pages/DietServiceDetail";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skin-treatments" element={<SkinTreatments />} />
      <Route path="/skin-treatments/:slug" element={<SkinServiceDetail />} />
      <Route path="/hair-treatment" element={<HairTreatment />} />
      <Route path="/hair-treatment/:slug" element={<HairServiceDetail />} />
      <Route path="/diet-consultation" element={<DietConsultation />} />
      <Route path="/diet-consultation/:slug" element={<DietServiceDetail />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
