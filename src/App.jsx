import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Services from "./components/Services";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Technologies from "./components/Technologies";
import Process from "./components/Process";
import Solutions from "./components/Solutions";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950 font-body text-mist-100">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <About />
        <WhyUs />
        <Technologies />
        <Process />
        <Solutions />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
