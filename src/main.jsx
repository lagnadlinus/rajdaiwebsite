import  React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.css';  // Importing global styles
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>  {/* Wrapping the app inside react router dom */}
      <App />
    </Router>
  </React.StrictMode>
);
