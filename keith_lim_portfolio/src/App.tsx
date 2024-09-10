import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutMe from "./components/pages/AboutMe"; 
import Projects from './components/pages/Projects';
import Travels from './components/pages/Travels';
import Blogs from './components/pages/Blogs';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        {/* Wrap all your routes in the Routes component */}
        <Routes>
          {/* Define the default route for the home page */}
          <Route path="" element={<Hero />} />

          {/* Define additional routes for other pages */}
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/travels" element={<Travels />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />

          {/* Add more routes as necessary */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
