import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/Global.css';

if (process.env.NODE_ENV === 'production') {
  // Serve static files
  const manifest: { [key: string]: string } = require('./manifest.json');
  const assets: string[] = Object.values(manifest).map((asset: string) => `/${asset}`);

  assets.forEach((asset: string) => {
    const link = document.createElement('link');
    link.href = asset;
    link.rel = 'preload';
    link.as = 'fetch';
    document.head.appendChild(link);
  });
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
