import React from 'react';
import ShortenerForm from './components/ShortenerForm';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>URL Shortener</h1>
      <ShortenerForm />
    </div>
  );
}

export default App;
