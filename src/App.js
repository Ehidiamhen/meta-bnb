import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Head from './components/Head/Head';
import Locations from './components/Locations/Locations';
import lowerSection from './components/Section/Section';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Head />
      <Locations />
      <lowerSection />
    </div>
  );
}

export default App;
