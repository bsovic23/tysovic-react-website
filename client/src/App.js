import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Homepage from './pages/Homepage';
import Work from './pages/Work';
import Skills from './pages/Skills';
import About from './pages/About';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <section class="application">
        < Header />

        < Navbar />
        <main>
          <Routes>
            <Route
            path="/"
            element={< Homepage />}
            />
            <Route
            path="/about"
            element={< About />}
            />
            <Route
            path="/work"
            element={< Work />}
            />
            <Route
            path="/skills"
            element={< Skills />}
            />
            <Route
            path="/resume"
            element={< Resume />}
            />
          </Routes>
        </main>
        < Footer />
      </section>
    </Router>
  );
}

export default App;
