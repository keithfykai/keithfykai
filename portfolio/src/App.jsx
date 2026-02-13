import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutMe } from "./Components/AboutMe";
import { Projects } from "./Components/Projects";
import { ContactMe } from "./Components/ContactMe";
import { Footer } from "./Components/Footer";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black text-white">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/keithfykai/" element={
              <div>
                <Hero />
                <AboutMe />
                <Projects />
                <ContactMe />
              </div>
              } />
            <Route path="*" element={<div className="text-center py-20 text-lg font-semibold text-white">404 Not Found</div>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}