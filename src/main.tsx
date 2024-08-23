import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { HotspotData } from './components/interfaces';

declare global {
  interface Window {
    initHotspots: (hotspotsNr: number) => HotspotData[];
  }
}

const initHotspots = (hotspotsNr: number): HotspotData[] => {
  const data = JSON.parse(document.getElementById('hotspotsData')!.textContent!);
  return data.slice(0, hotspotsNr);
}

// Declare the function on the window object
window.initHotspots = initHotspots;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
