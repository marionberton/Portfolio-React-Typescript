import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { Sidebar } from './shared/sidebar';
import { Main } from './pages/main';
import { Footer } from './shared/footer';
import './styles/tailwind.css';

library.add(fab);

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main className="py-4 px-8 lg:h-screen bg-lightgrey main">
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;
