import react from "react";
import Home from "./inv.jpg";
import home from "./home.jpeg";
import Layout from "./Layout";
import Profile from "./prof1.jpeg"
import Profile1 from "./profi2.jpeg"
import Profile2 from "./profi4.webp"

function About() {
  const homeStyle = {
    backgroundImage: `url(${Home})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    filter: "brightness(100%)",
  };

  return (
    <div className="font-Nunito">
      {/* <div className="flex h-80 justify-center items-center flex-col">
        <div className="w-full h-screen  bg-cover bg-center" style={homeStyle}>
          <div
            className="w-full h-full flex  justify-center items-center
             bg-blue-900/30 backdrop-brightness-75"
          >
            <span className="text-white text-4xl w-1/2 text-center">
              About Us
            </span>
          </div>
        </div>
      </div> */}
      <div className="p-6">
        <h2 className="uppercase md:tracking-wide text-4xl text-center text-blue-500 font-semibold">
          About Us
        </h2>
        <p className="mt-2 text-center text-black text-3xl pt-4">
          Kanza is a fintech company, based in Nairoi, Kenya.
          <br />
          The company provides an online crowdfunding
          <br />
          platform for real estate projects.
        </p>
      </div>

      <div className="md:flex flex-col  md:flex-row ">
        <div className="md:w-1/2 md:py-10 px-4  " style={homeStyle}></div>

        <div className="md:w-1/2 md:p-6 group space-y-2 bg-slate-100">
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
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-6 pt-8">
          <div className="flex bg-white flex-col items-center justify-center max-auto p-8 rounded-xl mix-blend-hard-light">
            <img
              src={Profile}
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
          <div className="flex bg-white flex-col items-center justify-center  max-auto p-8 rounded-xl mix-blend-hard-light">
            <img
              src={Profile1}
              alt=""
              className="h-20 max-auto mx-auto my-auto rounded-full"
            />
            <h4 className="uppercase text-xl text-center font-bold">
              ADURAHMAN MOHAMED
            </h4>
            <p className="text-sm leading-7 my-3 text-center font-semibold">
              CIO
            </p>
          </div>
          <div className="flex bg-white flex-col items-center justify-center  max-auto p-8 rounded-xl mix-blend-hard-light">
            <img
              src={Profile2}
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
    </div>
  );
}
export default About;
