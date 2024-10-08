import React, { Suspense, useState, useEffect } from 'react';
import HotspotComponent from './components/HotspotComponent/HotspotComponent';
import { HotspotData } from './components/interfaces';
const Sidebar = React.lazy(() => import('./components/Sidebar/Sidebar'));

const App: React.FC = () => {
  const [selectedHotspotData, setSelectedHotspotData] = useState<HotspotData | null>(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);
  const [hotspots, setHotspots] = useState<HotspotData[]>([]);
  const [visibleHotspotCount, setVisibleHotspotCount] = useState<number>(1);
  const [isHotspot2Added, setIsHotspot2Added] = useState<boolean>(false);

  // Effect to initialize hotspots and set up scroll listener
  useEffect(() => {
    // Initialize hotspots
    const data = window.initHotspots(visibleHotspotCount);
    setHotspots(data);

    // Scroll event handler
    const handleScroll = () => {
      if (window.scrollY > 300 && !isHotspot2Added) {
        setVisibleHotspotCount(prevCount => prevCount + 1);
        setIsHotspot2Added(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHotspot2Added, visibleHotspotCount]);

  const handleViewAllProducts = (data: HotspotData) => {
    setSelectedHotspotData(data);
    setIsSidebarVisible(true);
  };

  const closeSidebar = () => {
    setIsSidebarVisible(false);
  };

  return (
    <div>
      <div id="hotspots">
        {hotspots.map((hotspotData: HotspotData) => (
          <HotspotComponent
            key={hotspotData.src}
            id={hotspotData.src}
            data={hotspotData}
            onViewAllProducts={handleViewAllProducts}
          />
        ))}
      </div>
      {
        isSidebarVisible && (
          <Suspense fallback={<p>Loading ...</p>}>
            <Sidebar data={selectedHotspotData!} onClose={closeSidebar} />
          </Suspense>
        )
      }
    </div>
  );
};

export default App;
