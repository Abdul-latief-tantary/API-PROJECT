import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Photos from './components/Photos'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Photos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
