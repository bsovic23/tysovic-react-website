import React from 'react';

// Components
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Homepage from './pages/Homepage';

function App() {
  return (
   <section class="application">
    <header>
      <Header />

      <Navbar />
    </header>

    <main>
      < Homepage />
    </main>
    
    <footer>
      < Footer />
    </footer>
   </section>
  );
}

export default App;
