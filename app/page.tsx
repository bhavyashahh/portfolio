import GradientDescentCanvas from "@/components/GradientDescentCanvas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contributions from "@/components/Contributions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <GradientDescentCanvas />
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Contributions />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
