import HeroSection from "./components/HeroSection";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative bg-black font-Onest text-white">
      
      <HeroSection />
      <div className="space-y-24">
        <Experience />
        <Projects />
        <AboutMe />
      </div>
      <Footer />
    </div>
  );
}
