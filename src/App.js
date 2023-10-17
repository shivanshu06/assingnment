// App.js
import React, { useState } from 'react';
import Sidebar from './components/sidenav';
import Container from './container/index'
import { MenuUnfoldOutlined } from '@ant-design/icons';
import './App.css';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <button onClick={toggleSidebar} className="open-sidebar-button">
      <MenuUnfoldOutlined />
      </button>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      {/* Add the main content of your app here */}
      <Container />
    </div>
  );
};

export default App;
