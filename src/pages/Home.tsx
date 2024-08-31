import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
// import './Home.css';

const Home: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="home">
      <button className="open-sidebar-button" onClick={toggleSidebar}>
        Explore Web API
      </button>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </div>
  );
};

export default Home;
