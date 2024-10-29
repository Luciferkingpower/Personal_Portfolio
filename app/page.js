
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ProjectsPage from "./projects/page";
import Seperation from "@/components/Seperation";
export default function Home() {
  return (
    <main>
   
      <Hero/>
      <Seperation/>
      <About/>
      <Seperation/>
      <ProjectsPage />
      <Seperation/>
      <Contact/>
      <Seperation/>       
     
    </main>
  );
}
