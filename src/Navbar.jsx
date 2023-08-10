import React from "react";
import { useState } from "react";
import Popup from "./Popup";
import kanza from "./kanza.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav({ isPopupOpen, handleOpenPopup }) {
  let [open, setopen] = useState(false);
  // const [isPopupOpen, setPopupOpen] = useState(false);

  // const handleOpenPopup = () => {
  //   setPopupOpen(true);
  // };

  // const handleClosePopup = () => {
  //   setPopupOpen(false);
  // };
  return (
    <div className="bg-blue-700  font-Nunito">
      <nav className="flex items-center justify-between p-1">
        <FontAwesomeIcon
          icon="bars"
          style={{ color: "#0000FF" }}
          className="md:hidden fixed pr-20 -right-16 pb-3 cursor-pointer h-6 z-20 top-1"
          onClick={() => setopen(!open)}
        />
        <div className=" space-x-4">
          <img src={kanza} alt="logo" className="w-40 h-20 " />
          {/* <h2 className="mt-6 text-blue-500 font-semibold text-2xl">
            KANZA
          </h2> */}
        </div>

        <ul
          className={`bg-blue-500 backdrop-blur-md  md:static fixed duration-500 ease-linear top-0 md:h-auto h-screen z-10   ${
            !open ? "right-[-500%]" : "right-0"
          }`}
        >
            
          <li className="md:inline-block md:ml-10 ml-5 md:p-2 md:my-0 my-4 border-b-2 border-blue-500 hover:border-blue-100 duration-500 pt-10">
            <a
              href="/"
              className="text-white text-xl cursor-pointer font-Barlow font-normal inline-block md:py-2"
            >
              Home
            </a>
          </li>
          <li className="md:inline-block md:ml-10 ml-5 md:p-2 md:my-0 my-4 border-b-2 border-blue-500 hover:border-blue-100 duration-500">
            <a
              href="/about"
              className="text-white text-xl cursor-pointer font-Barlow font-normal inline-block md:py-2"
            >
              About Us
            </a>
          </li>
          <li className="md:inline-block md:ml-10 ml-5 md:p-2 md:my-0 my-4 border-b-2 border-blue-500 hover:border-blue-100 duration-500">
            <a
              href="/projects"
              className="text-white text-xl cursor-pointer font-Barlow font-normal inline-block md:py-2"
            >
              Projects
            </a>
          </li>
          <li className="md:inline-block md:ml-10 ml-5 md:p-2 md:my-0 my-4 border-b-2 border-blue-500 hover:border-blue-100 duration-500">
            <a
              href="/contact"
              className="text-white text-xl cursor-pointer font-Barlow font-normal inline-block md:py-2"
            >
              Contact
            </a>
          </li>
            <br/> 
          {/* <li className="md:inline-block md:ml-10 ml-5 md:my-0 my-4 border-b-2 border-amber-500 hover:border-amber-500 duration-500">
            <a
              href="/login"
              className="text-white text-xl cursor-pointer font-Barlow font-normal inline-block md:py-2"
            >
              Login
            </a>
          </li> */}
          {/* px-4 py-2 bg-blue-500 text-white rounded */}
          {/* <button
            className="bg-blue-500 text-white rounded px-4 py-2 mx-auto"
            onClick={handleOpenPopup}
          >
            Login
          </button> */}

          {/* Render the login popup based on the isPopupOpen state */}
          {/* {isPopupOpen && (
             <div className="block top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-900 bg-opacity-20">
             <Popup onClose={handleClosePopup} />
            </div>
          )} */}
      {/* <li className="md:inline-block md:ml-10 ml-5 md:p-2  md:my-0 my-4 pr-8 ">

          <button
            className="bg-white  rounded px-4 py-2 mx-auto font-normal text-xl"
            onClick={handleOpenPopup}
          >
            Login
          </button>
          </li>
            <li className="md:inline-block md:ml-10 ml-5 md:p-2  md:my-0 my-4 pr-8 ">

          <button
            className="bg-white  rounded px-4 py-2 mx-auto font-normal text-xl"
            onClick={handleOpenPopup}
          >
            Login
          </button>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
