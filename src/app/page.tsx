import Hero from "@/components/Hero";
import PhotoMarquee from "@/components/PhotoMarquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <PhotoMarquee />
      <About />
      <Services />
      <Projects />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}
