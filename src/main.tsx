import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import HotspotComponent from './components/HotspotComponent';
import './index.css';

// Extend the Window interface to include initHotspots
declare global {
  interface Window {
    initHotspots: () => void;
  }
}

const rootMap = new Map<string, ReactDOM.Root>();
let isHotspot2Added = false; // Add this flag

const initHotspots = () => {
  const data: any = JSON.parse(document.getElementById('hotspotsData')!.textContent!);
  const components = document.querySelectorAll('.hotspot-component');

  components.forEach((element) => {

    const componentData = data.find((item: any) => item.id === element.id);

    if (componentData && element instanceof HTMLElement) {
      if (!rootMap.has(element.id)) {
        console.log(`Creating new root for: ${element.id}`);
        const root = ReactDOM.createRoot(element);
        rootMap.set(element.id, root);
        root.render(<HotspotComponent id={element.id} data={componentData} />);
      } else {
        console.log(`Updating existing root for: ${element.id}`);
        const existingRoot = rootMap.get(element.id);
        existingRoot?.render(<HotspotComponent id={element.id} data={componentData} />);
      }
    }
  });
};

// Declare the function on the window object
window.initHotspots = initHotspots;

document.addEventListener('DOMContentLoaded', initHotspots);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.addEventListener('scroll', () => {

  if (window.scrollY > 300 && !isHotspot2Added) { // Check if the component has already been added
    const hotspotsContainer = document.getElementById('hotspots')
    const newDiv = document.createElement('div');
    newDiv.id = 'hotspot2';
    newDiv.className = 'hotspot-component';
    newDiv.style.marginTop = '100px';

    hotspotsContainer?.appendChild(newDiv);

    window.initHotspots();

    isHotspot2Added = true; // Set the flag to true to prevent adding more components
  }
});
