import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Map from "./map.jpeg"


function Footer() {
  return (
    <div className=" bg-white font-Nunito">
      <div class="h-2 w-full mt-2 bg-blue-500"></div>
      <div className="md:flex md:justify-between md:items-center lg:px-12 px-3 py-2">
        <div className="space-x-2 mt-6">
          <h6 className="text-blue-500 font-bold text-3xl pb-6"> KANZA</h6>
<h2 className=" text-xl">As an esteemed investment company,<br/>
   we are committed to providing our clients <br/>
    with the highest level of trust, expertise,<br/>
    and performance in managing their<br/>
    financial portfolios. </h2>
    {/* <img src={Map} alt="" className="h-72 w-80" /> */}
          {/* <div>
            <Feeds />
          </div> */}

        </div>
        <div className="grid grid-rows-6 grid-flow-col mt-4   ">
          <h2 className="text-black font-bold text-3xl pb-4">Links</h2>
          <Link
            to="/"
            className="hover:text-blue-500 duration-300
          text-xl cursor-pointer leading-6  underline decoration-solid decoration-blue-500 underline-offset-8 "
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-500 duration-300
          text-xl cursor-pointer leading-6 underline decoration-solid decoration-blue-500 underline-offset-8  "
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-500 duration-300
          text-xl cursor-pointer leading-6 underline decoration-solid decoration-blue-500 underline-offset-8 "
          >
            Contact Us
          </Link>
          <Link
            to="/projects"
            className="hover:text-blue-500 duration-300
          text-xl cursor-pointer leading-6 underline decoration-solid decoration-blue-500 underline-offset-8 "
          >
            Projects
          </Link>
        </div>
        {/* services */}
        <div className="grid grid-rows-6 grid-flow-col mt-4">
          <h2 className="text-black font-bold text-3xl pb-4 ">Services</h2>
          <Link
            to=""
            className="hover:text-blue-500 duration-300
          text-xl cursor-pointer leading-6 underline decoration-solid decoration-blue-500 underline-offset-8 "
          >
            Terms of service
          </Link>
          <Link
            to=""
            className="hover:text-blue-500 duration-300
          text-xl cursor-pointer leading-6 underline decoration-solid decoration-blue-500 underline-offset-8 "
          >
            Privacy POlicy
          </Link>
          <Link
            to=""
            className="hover:text-blue-500 duration-300
          text-xl cursor-pointer leading-6 underline decoration-solid decoration-blue-500 underline-offset-8 "
          >
            Invest
          </Link>
          <Link
            to=""
            className="hover:text-blue-500 duration-300
          text-xl cursor-pointer leading-6 underline decoration-solid decoration-blue-500 underline-offset-8 "
          >
           FAQS
          </Link>
        </div>

        <div className="grid grid-rows-6 grid-flow-col mt-4">
          <h3 className="text-black font-bold text-3xl pb-4  ">
            Get In Touch With Us
          </h3>
          <div className="flex space-x-2">
            <FontAwesomeIcon
              icon="fa-solid fa-phone"
              style={{ color: "#0000FF" }}
            />
            <a href="tel:+254 110027537 or +254 758978010" className="hover:text-blue-500 text-xl">
            +254 110027537 or +254 758978010
            </a>
          </div>

          <div className="flex space-x-4">
            <FontAwesomeIcon
              icon="fa-solid fa-envelope"
              style={{ color: "#0000FF" }}
            />
            <a
              href="mailto:info@kanza.com"
              className="hover:text-blue-500 text-xl"
            >
             info@kanza.com
            </a>
          </div>

          <div className="flex space-x-4">
            <FontAwesomeIcon
              icon="fa-solid fa-location-dot"
              style={{ color: "#0000FF" }}
            />
            <a href="" className="hover:text-blue-500 text-xl">
              Nairobi
            </a>
          </div>

          <div className="flex space-x-4">
            <a
              href=""
              // target="_blank"
            >
              <FontAwesomeIcon
                icon="fa-brands fa-facebook"
                style={{ color: "#0000FF" }}
                size="2xl"
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                icon="fa-brands fa-twitter"
                style={{ color: "#0000FF" }}
                size="2xl"
              />
            </a>
            <a
              href=""
              // target="_blank"
            >
              <FontAwesomeIcon
                icon="fa-brands fa-square-instagram"
                style={{ color: "#0000FF" }}
                size="2xl"
              />
            </a>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-black text-center md:pb-2 text-xl">
          © Copyright KANZA. 2023 All Rights Reserved
        </h2>
      </div>
    </div>
  );
}

export default Footer;
