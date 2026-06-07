import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Discover from './components/Discover';
import Menu from './components/Menu';
import WhyUs from './components/WhyUs';
import CtaBanner from './components/CtaBanner';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
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
      <Footer />
    </>
  );
}
