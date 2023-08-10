import React from "react";
import logo from "./logo.svg";
import Takaful from "./takaful.png";
import Bushra from "./bushra.png"
import Gulf from "./gulf.jpeg"

function Partners() {
  const partners = [
    {
      id: 1,
      name: "Bushra Micro Finance",
      image: Bushra,
    },
    {
      id: 2,
      name: "Takaful",
      image: Takaful,
    },
    {
      id: 3,
      name: "Gulf",
      image: Gulf,
    },
  ];

  return (
    <div className="bg-white font-Nunito">
      <div className="rounded-lg">
        <h2 className="uppercase md:tracking-wide text-4xl text-center text-blue-500 font-semibold pt-6">
          Meet our partners
        </h2>
      </div>
      <div className="md:flex md:flex-wrap md:justify-between md:items-center md:pl-8 md:pr-8 md:pb-6 space-y-6 ">
        {partners.map((partner) => (
          <div key={partner.id} className="w-full md:w-1/3">
            <div className="bg-white rounded-lg shadow-md md:p-4 flex flex-col items-center">
              <h1 className="text-center md:text-left">{partner.name}</h1>
              <img
                className="w-72 h-40 mt-2 md:shadow-lg"
                src={partner.image}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
