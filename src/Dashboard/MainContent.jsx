import React from 'react';
import Projects from "./Projects"
import Report from "./Report"
import Account from "./Account"
import { Router, Route, Routes } from "react-router-dom";
import Settings from './Settings';

const MainContent = () => {
  return (
    <div className="p-4">
   

      <div>
        <Routes>
            
        <Route path="/projects" element={<Projects />} />
        <Route path="/account" element={<Account />} />
        <Route path="/report" element={<Report />} />
        <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainContent;