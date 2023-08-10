// import About from "./About";
import about from "./inv.jpg";
import Projects from "./Projects";
import Testimonial from "./Testimonial";
import Partners from "./Partners";
import home from "./home.jpeg";
import Layout from "./Layout";
import react, { useState } from "react";
import About from "./About";

import Signup from "./Signup";
import Popup from "./Popup";
import Nav from "./Navbar";

function Home2() {

  return (
    <div>

      <div className="mx-auto  shadow-md overflow-hidden font-Nunito">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <img className="w-[950px] h-full object-cover" src={home} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center md:p-14 md:pt-40 bg-slate-200 space-y-4">
            <h1 className="uppercase text-center md:tracking-wide text-4xl text-blue-500 font-semibold">
              Invest In Real-Estate <br />
              Project in Kenya
            </h1>
            <p className="text-slate-700 text-center text-lg">
              (Enjoy high return on your investment of up to 20%)
            </p>
            <div className="items-center">
              <button className="bg-blue-500 p py-2.5 px-8 rounded-full">
                Invest Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* About Us */}
      <div className="md:flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-8">
        <div className="md:w-1/2 py-10 px-4">
          <h2 className="uppercase md:tracking-wide text-4xl text-center text-blue-500 font-semibold">
            About Us
          </h2>
          <p className="mt-2 text-center text-slate-700 text-lg pt-4">
            Kanza is a fintech company, <br />
            based in Nairoi, Kenya. The company provides <br />
            an online crowdfunding platform for real estate projects.
          </p>
        </div>

        <div className="md:w-1/2 md:p-6 group space-y-2">
          <div className="bg-blue-500 duration-500 group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl">
            <h4 className="uppercase text-xl text-white font-bold">Mission</h4>
            <p className="text-sm leading-7 my-3 font-semibold">
              Kanza's mission is connecting real-estate developers with
              investors (local & international+diaspora)
            </p>
          </div>
          <div className="bg-blue-500 duration-500 group-hover:scale-[0.85] hover:!scale-100 p-8 rounded-xl">
            <h4 className="uppercase text-xl text-white font-bold">Vision</h4>
            <p className="text-sm leading-7 my-3 font-semibold">
              Kanza's vision is to have 100 RE projects raise Ksh 10B+ in 5
              years.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 md:h-[400px] rounded-lg">
        <h2 className="uppercase md:tracking-wide text-4xl text-center text-blue-500 font-semibold pt-6">
         meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-6 pt-8">
          <div className="flex flex-col items-center justify-center max-auto p-8 rounded-xl mix-blend-hard-light">
            <img
              src={home}
              alt=""
              className="h-20 max-auto mx-auto my-auto rounded-full"
            />
            <h4 className="uppercase text-xl text-center font-bold">
              Abdurazak Abdi
            </h4>
            <p className="text-sm leading-7 my-3 text-center font-semibold">
              CEO
            </p>
          </div>
          <div className="flex  flex-col items-center justify-center  max-auto p-8 rounded-xl mix-blend-hard-light">
            <img
              src={home}
              alt=""
              className="h-20 max-auto mx-auto my-auto rounded-full"
            />
            <h4 className="uppercase text-xl text-center font-bold">
              ADURAMAN MOHAMED
            </h4>
            <p className="text-sm leading-7 my-3 text-center font-semibold">
              CIO
            </p>
          </div>
          <div className="flex flex-col items-center justify-center  max-auto p-8 rounded-xl mix-blend-hard-light">
            <img
              src={home}
              alt=""
              className="h-20 max-auto mx-auto my-auto rounded-full"
            />
            <h4 className="uppercase text-xl text-center font-bold">
              ABDULAHI SHEIKH
            </h4>
            <p className="text-sm leading-7 my-3 text-center font-semibold">
              CTO
            </p>
          </div>
        </div>
      </div>
      {/* About end */}
      <Projects />
      <Partners />
      <Testimonial />
    </div>
  );
}

export default Home2;
