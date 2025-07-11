import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/themes.css';
import App from './App';
import * as serviceWorker from './utils/serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker for offline functionality
serviceWorker.register({
  onSuccess: () => {
    console.log('Portfolio is now available offline!');
  },
  onUpdate: () => {
    console.log('New version available! Please refresh.');
  }
});