import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Homepage from './pages/Homepage';
import Work from './pages/Work';

function App() {
  return (
    <Router>
      <section class="application">
        < Header />

        < Navbar />
        <main>
          <Routes>
            <Route
            path="/tysovic-react-website/"
            element={< Homepage />}
            />
            <Route
            path="/tysovic-react-website/work"
            element={< Work />}
            />
          </Routes>
        </main>
        < Footer />
      </section>
    </Router>
  );
}

export default App;
