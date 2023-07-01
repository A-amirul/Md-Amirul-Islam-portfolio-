
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
AOS.init();

function App() {


  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
