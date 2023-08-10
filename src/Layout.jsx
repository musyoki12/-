// Layout.js

import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Popup from './Popup';
// import about

function Layout({ children }) {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="font-Nunito">
      <Navbar handleOpenPopup={handleOpenPopup} /> {/* Pass the function to open the popup */}
      {children}
      {/* <Footer /> */}

      {/* Render the popup based on the isPopupOpen state */}
      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-900 bg-opacity-20">
          <Popup onClose={handleClosePopup} />
        </div>
      )}
    </div>
  );
}

export default Layout;
