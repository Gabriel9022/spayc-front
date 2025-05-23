import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Analytics } from '@vercel/analytics/react';
import '../src/assets/styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>
)
