import HeroSection from "./components/HeroSection";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative font-Onest text-white">
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
      <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
      </div>
      <div className="z-50">
        <HeroSection />
        <div className="space-y-24">
          <Experience />
          <Projects />
          <AboutMe />
        </div>
        <Footer />
      </div>
    </div>
  );
}
