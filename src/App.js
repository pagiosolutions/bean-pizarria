import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Discover from './components/Discover';
import Menu from './components/Menu';
import WhyUs from './components/WhyUs';
import CtaBanner from './components/CtaBanner';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Contato from './components/Contato';
import Footer from './components/Footer';
import Catalogo from './pages/Catalogo';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Discover />
      <Menu />
      <WhyUs />
      <CtaBanner />
      <Testimonials />
      <Newsletter />
      <Contato />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
    </BrowserRouter>
  );
}
