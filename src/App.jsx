import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FirmaSection from "./components/FirmaSection";
import AreasSection from "./components/AreasSection";
import EquipoSection from "./components/EquipoSection";
import ConsultaSection from "./components/ConsultaSection";
import PublicacionesSection from "./components/PublicacionesSection";
import TestimoniosSection from "./components/TestimoniosSection";
import ContactoSection from "./components/ContactoSection";
import Footer from "./components/Footer";
import PublicacionesPage from "./components/PublicacionesPage";
import ScrollToTop from "./components/ScrollToTop";

function LandingPage() {
  return (
    <>
      <Hero />
      <FirmaSection />
      <AreasSection />
      <EquipoSection />
      <ConsultaSection />
      <PublicacionesSection />
      <TestimoniosSection />
      <ContactoSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/publicaciones" element={<PublicacionesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
