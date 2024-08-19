import About from "./components/About";
import ContactForm from "./components/ContactForm";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Polaroids from "./components/Polaroids";
import Projects from "./components/Projects";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-black tracking-tighter text-white antialiased">
      <Navbar/>
      <HeroSection/>
      <About/>
      <Projects/>
      <Polaroids/>
      <ContactForm/>
      
    </main>
  );
};
export default App;
