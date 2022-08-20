import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';
import { Heading } from './components/Heading';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Questions } from './pages/Questions';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/about" element={<Questions />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>

      </header>
    </div>
  );
}

export default App;

