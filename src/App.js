import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Head from './components/Head/Head';
import Locations from './components/Locations/Locations';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Head />
      <Locations />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
