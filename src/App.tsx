import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SocialBar from './components/SocialBar';
import Chatbot from './components/Chatbot';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Placements from './pages/Placements';
import CampusLife from './pages/CampusLife';
import Contact from './pages/Contact';
import DepartmentsIndex from './pages/departments/DepartmentsIndex';
import DepartmentPage from './pages/departments/DepartmentPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/campus" element={<CampusLife />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/departments" element={<DepartmentsIndex />} />
        <Route path="/departments/:id" element={<DepartmentPage />} />
      </Routes>
      <Footer />
      <SocialBar />
      <Chatbot />
    </Router>
  );
}

export default App;
