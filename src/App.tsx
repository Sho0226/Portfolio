import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Works from './components/Works';

function App() {
  return (
    <div className="bg-white text-black">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Works />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
