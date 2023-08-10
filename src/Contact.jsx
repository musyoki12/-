import react from "react";
import Layout from "./Layout";
import Map from "./map.jpeg"

import Con from "./contact.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lottie from "react-lottie";
import chatbot from "./chatbot.json";

function Contact() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: chatbot,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="font-Nunito">
      <div className=" bg-gradient-to-b from-blue-500 to-gray-300  md:flex md:justify-between md:items-center ">
        <div className="md:px-12 flex flex-col space-y-4">
          <h2 className="text-5xl font-bold text-black">
            Let's Talk About Your Investment
          </h2>
          <p className="text-xl text-black">
            We care about your money.
            <br></br>
            Don't hesitate to reach out,
            <br></br>
            our door is always open and we would love to hear from you. <br />
            Let's have a chat.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="">
            <Lottie
              animationData={chatbot}
              options={defaultOptions}
              max-height={500}
              max-width={500}
              classNameName=""
            />
          </div>
        </div>
      </div>

      <div className="md:flex md:flex-wrap md:justify-center md:items-center pt-6">
        {/* <!--first card --> */}
        <div className="w-full md:w-1/3 md:h-52 px-6 mb-6 md:mb-0">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Email or Call US Through
              </h5>{" "}
            </a>
            <h3 className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {" "}
              Tel: +254 110027537 or{" "}
            </h3>
            <h3 className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              +254 758978010
            </h3>
            <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              Email:info@kanza.com
            </a>
            <div></div>
          </div>
        </div>

        {/* <!-- secondcard --> */}
        {/* <div className="w-full md:w-1/3 px-6 mb-6 md:mb-0">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Chat with Us on
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Instagram
            </p>
            <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              facebook
            </a>
            <div>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:underline"
              >
                Twitter
              </a>
            </div>
          </div>
        </div> */}
        {/* <!-- Third card --> */}
        <div className="w-full md:w-1/3 md:h-52 px-6 mb-6 md:mb-0">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Where We are Located
              </h2>
            </a>
            <h3 className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Adress:Twenieth Centuary Plaza
            </h3>
            <h3 className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              3rd floor Mama Ngina st
            </h3>
            <h3 className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Nairobi Kenya
            </h3>

            <div></div>
          </div>
        </div>
      </div>
      <div className="md:flex bg-gray-200 md:justify-between md:items-center md:p-10">
        <div className="">
          <h2 className="text-4xl font-semibold ml-8 text-blue-500 ">
            Contact Us
          </h2>
          <div>
            <form className="md:ml-2 md:p-4">
              <div className="md:grid md:grid-cols-2 gap-2 ">
                <div className="w-full md:w-full mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none block md:w-80 w-64 bg-gray-100 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <br />
                <div className="flex flex-wrap mb-6 md:mb-0">
                  <div className=" ">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      E-mail
                    </label>
                    <input
                      className="appearance-none block md:w-80 w-64 bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="email"
                      type="email"
                    />
                  </div>
                </div>
                <br />
                <div className="flex flex-wrap  mb-6">
                  <div className="w-full ">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Message
                    </label>
                    <textarea
                      className=" block md:w-80 w-64 md:ml-0 bg-gray-100 text-gray-700 border border-gray-200 rounded  mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-32 "
                      id="message"
                    ></textarea>
                    {/* <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p> */}
                  </div>
                </div>
                <br />
                <div className="md:flex md:items-center">
                  <div className="md:w-1/3">
                    <button
                      className="shadow bg-blue-400 hover:bg-blue-100 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded"
                      type="button"
                    >
                      Send
                    </button>
                  </div>
                  {/* <div className="md:w-2/3"></div> */}
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="">
        <img src={Map} alt=""  className="h-96 w-80" />
        </div>
      </div>
    </div>
  );
}
export default Contact;
