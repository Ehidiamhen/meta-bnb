import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Head from './components/Head/Head';
import Locations from './components/Locations/Locations';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Head />
      <Locations />
    </div>
  );
}

export default App;
