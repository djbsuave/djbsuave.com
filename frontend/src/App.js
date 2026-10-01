import "@/App.css";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import Portfolio from "@/components/site/Portfolio";
import LiveSets from "@/components/site/LiveSets";
import Testimonials from "@/components/site/Testimonials";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

function App() {
  return (
    <div className="App bg-[#050505] text-white" data-testid="app-root">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <LiveSets />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
