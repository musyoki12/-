import React, { useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
import Real from "./real1.avif";
import Real1 from "./real2.avif";
import Real2 from "./real3.avif";


const projects = [
  {
    image: Real,
    name: "Mixed use building in Kileleshwa",
    description: "Raising: Ksh 700M",
  },
  {
    image: Real1,
    name: "Residential building in Parklands",
    description: "Raising: Ksh 500M",
  },
  {
    image: Real2,
    name: "Student accommodation in Roysambu",
    description: "Raising: Ksh 400M",
  },
];

function Projects() {


  return (
    <div className="font-Nunito">
      <div className="p-6">
      <h2 className="uppercase md:tracking-wide text-4xl text-center text-blue-500 font-semibold">
        Our projects
        </h2>
      </div>
    <div className="container mx-auto px-4 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, idx) => (
          <div key={idx} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={project.image} alt={project.name} className="w-full" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{project.name}</div>
              <p className="text-gray-700 text-base">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Projects;
