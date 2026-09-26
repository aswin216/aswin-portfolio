import Nav from "@/layouts/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import Footer from "@/layouts/Footer";

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
