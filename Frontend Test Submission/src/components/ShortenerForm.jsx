
import React, { useState, useEffect } from 'react';
import Log from '../../../LoggingMiddleware/logger';
import './ShortenerForm.css';

const API_URL = 'https://api.shrtco.de/v2/shorten?url=';

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}


const ShortenerForm = () => {
  const [input, setInput] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Log when the component mounts (React + middleware demo)
  useEffect(() => {
    Log('Frontend', 'INFO', 'URLShortener', 'ShortenerForm component mounted.');
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
    setError('');
    setShortUrl('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    Log('Frontend', 'INFO', 'URLShortener', 'Shorten button clicked.');
    if (!input.trim()) {
      setError('Please enter a URL.');
      Log('Frontend', 'ERROR', 'URLShortener', 'Empty input submitted.');
      return;
    }
    if (!isValidUrl(input)) {
      setError('Invalid URL format.');
      Log('Frontend', 'ERROR', 'URLShortener', 'Invalid URL format.');
      return;
    }
    setLoading(true);
    setError('');
    setShortUrl('');
    try {
      const res = await fetch(API_URL + encodeURIComponent(input), { method: 'POST' });
      const data = await res.json();
      if (data.ok && data.result && data.result.full_short_link) {
        setShortUrl(data.result.full_short_link);
        Log('Frontend', 'INFO', 'URLShortener', 'URL shortened successfully.');
      } else {
        setError('Failed to shorten URL.');
        Log('Frontend', 'ERROR', 'URLShortener', 'API did not return a shortened URL.');
      }
    } catch (err) {
      setError('API error. Please try again.');
      Log('Frontend', 'ERROR', 'URLShortener', 'API call failed: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="shortener-outer">
      <div className="shortener-card">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter long URL"
            value={input}
            onChange={handleChange}
            disabled={loading}
          />
          <button className="shortener-btn" type="submit" disabled={loading}>{loading ? 'Shortening...' : 'Shorten'}</button>
          {error && <div className="shortener-error">{error}</div>}
          {shortUrl && (
            <div className="shortener-result">
              Shortened URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ShortenerForm;
