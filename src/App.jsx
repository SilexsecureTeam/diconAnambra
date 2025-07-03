import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Speakers from './pages/Speakers';
import Contact from './pages/Contact';
import Sponsorship from './pages/Sponsorship';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/speakers" element={<Speakers />} /> */}
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/sponsorship" element={<Sponsorship />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
