import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SkinTreatments from "./pages/SkinTreatments";
import HairTreatment from "./pages/HairTreatment";
import DietConsultation from "./pages/DietConsultation";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skin-treatments" element={<SkinTreatments />} />
      <Route path="/hair-treatment" element={<HairTreatment />} />
      <Route path="/diet-consultation" element={<DietConsultation />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
