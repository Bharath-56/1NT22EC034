import React from 'react';
import ShortenerForm from './components/ShortenerForm';
import StatisticsPage from './components/StatisticsPage';
import '../App.css';

function App() {
  return (
    <div className="app-container">
      <h1>URL Shortener</h1>
      <ShortenerForm />
      <StatisticsPage />
    </div>
  );
}

export default App;
