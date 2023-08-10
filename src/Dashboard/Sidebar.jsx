import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-black text-white h-screen w-56 p-4">
      {/* Sidebar content and links go here */}
      <ul>
        <li className="my-5">Dashboard</li>
        <li className="my-5">
        <Link to="dashhome">HOME</Link>
            </li>
        <li className="my-5">
            <Link to="/account">Account</Link></li>
        <li className="my-5">
            {/* <Link to ="/projects"></Link>Projects/Investments */}
            <Link to="/projects">Projects</Link>
            
            </li>
        <li className="my-5">
          <Link to="/report">Report</Link>
        </li>
        <li className="my-5">
            <Link to="/settings">Settings</Link></li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
