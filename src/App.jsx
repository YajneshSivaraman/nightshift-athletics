
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Training from "./components/Training";
import About from "./components/About";
import Contact from "./components/Contact"

// Keep each page section in its intended order.
export default function App() {
  return (
    <main className="m-0 min-h-screen w-full bg-[#080809] text-[#F1EDE8]">
      <Navbar />
      <Hero />
      <Training />
      <About />
      <Contact/>
     
    </main>
  );
}
