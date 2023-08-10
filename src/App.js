import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import Footer from "./Footer";
import Projects from "./Projects.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Login from "./Login";
import Signup from "./Signup";
import Layout from "./Layout";
import Header from "./Header";
import Popup from './Popup';
import SignupPopup from './SignupPopup'
import DashboardLayout from './Dashboard/DashboardLayout';



// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import { Router, Route, Routes } from "react-router-dom";

function App() {
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isSignupVisible, setSignupVisible] = useState(false);

  const handleOpenLogin = () => {
    setLoginVisible(true);
  };

  const handleCloseLogin = () => {
    setLoginVisible(false);
  };

  const handleOpenSignup = () => {
    setSignupVisible(true);
  };

  const handleCloseSignup = () => {
    setSignupVisible(false);
  };

  return (
    <div className="App">
      <Header onLoginClick={handleOpenLogin} onSignupClick={handleOpenSignup} />
      {/* <Navbar /> */}
      
      {/* Show the Login component */}
      {/* {!showSignup && <Login onSignupClick={handleOpenSignup} />} */}
      
      {/* Show the Signup component on top of the Login component */}
      {/* {showSignup && (
        <div className="signup-overlay">
          <Signup onClose={handleCloseSignup} />
        </div>
      )} */}
     <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </Layout>
      {/* Render the login popup */}
      {isLoginVisible && <Popup onClose={handleCloseLogin} />}
      {/* Render the signup popup */}
      {isSignupVisible && <SignupPopup onClose={handleCloseSignup} />}

      <Footer />
      <DashboardLayout/>
    </div>
  );
}

export default App;
library.add(fab, fas, far);
