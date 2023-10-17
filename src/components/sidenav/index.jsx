// Sidebar.js
import React from 'react';
import './Sidebar.css';
import { CloseOutlined,MessageOutlined ,SettingOutlined , KeyOutlined,CodeSandboxOutlined ,UserOutlined ,WalletOutlined ,LikeOutlined ,NotificationOutlined } from '@ant-design/icons';


const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className='close-button' onClick={onClose}><CloseOutlined /></button>

      <h2 style={{color:'white'}}><SettingOutlined /> Dashboard</h2>
      <br></br>
      <h4 className='sidewhite'><KeyOutlined /> Dashboard</h4>
      <h4 className='sidewhite'><CodeSandboxOutlined /> Product</h4>
      <h4 className='sidewhite'><UserOutlined /> Customers</h4>
      <h4 className='sidewhite'><WalletOutlined /> Income</h4>
      <h4 className='sidewhite'><NotificationOutlined /> Promote</h4>
      <h4 className='sidewhite'><MessageOutlined /> Help</h4>
      
    </div>
  );
};

export default Sidebar;
