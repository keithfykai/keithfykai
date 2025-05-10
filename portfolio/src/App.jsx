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
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/keithfykai/" element={<Hero />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contactme" element={<ContactMe />} />
            <Route path="*" element={<div className="text-center py-20 text-lg font-semibold">404 Not Found</div>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}