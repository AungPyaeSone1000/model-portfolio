import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-black tracking-tighter text-gray-900 antialiased">
      <Navbar/>
      <HeroSection/>
      <h1>Hello World</h1>
      
    </main>
  );
};
export default App;
