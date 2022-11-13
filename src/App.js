import React from 'react';

import './App.css';
import Route from './components/Router/Route';
import Navbar from './components/Navbar/Navbar.js';
import Head from './components/Head/Head';
import Locations from './components/Locations/Locations';
import Places from './components/Locations/Places';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Navbar />
        <Head />
        <Locations />
        <Section />
        <Footer />
      </Route>

      <Route path="/places">
        <Navbar />
        <Places />
        <Footer />
      </Route>
    </div>
  );
}

export default App;
