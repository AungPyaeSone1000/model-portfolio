import About from "./components/About";
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
      <h1>Hello World</h1>
      
    </main>
  );
};
export default App;
