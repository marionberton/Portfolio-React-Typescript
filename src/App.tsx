import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { Sidebar } from './shared/sidebar';
import { Main } from './pages/main';
import './styles/tailwind.css';

library.add(fab);

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main
        style={{ marginLeft: '25%' }}
        className="py-4 px-8 h-screen bg-lightgrey"
      >
        <Main />
      </main>
    </div>
  );
}

export default App;
