import AboutUs from "@/Components/AboutUs";
import FAQ from "@/Components/FAQ";
import Gallary from "@/Components/Gallary";
import HeroSection from "@/Components/HeroSection";
import ModelImage from "@/Components/ModelImage";
import NavBar from "@/Components/NavBar";
import Properties from "@/Components/Properties";
import Teams from "@/Components/Teams";
import Testimonials from "@/Components/Testimonials";
import Flyers from "@/Components/Flyers";
import GoldenOpportunity from "@/Components/GoldenOpportunity";
import Contact from "@/Components/Contact";
import Foolter from "@/Components/Foolter";

export default function Home() {
  return (
    
   <main>
     <NavBar/>
     <ModelImage/>
     <div className="space-y-9 md:space-y-12 lg:space-y-24">
     <HeroSection/>
     <AboutUs/>
     <Gallary/>
     <Properties/>
     <Teams/>
     <Testimonials/>
     <FAQ/>
     <Flyers/>
     <GoldenOpportunity/>
     <Contact/>
     <Foolter/>
     </div>
   </main>
  );
}
