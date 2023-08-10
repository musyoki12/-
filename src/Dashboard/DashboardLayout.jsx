import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default DashboardLayout;
