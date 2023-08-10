import react from "react";
import Home from "./testimonial.jpeg";
import pic from "./pic.jpeg";
import pic1 from "./pic1.jpeg";

function Testmonial() {
  return (
    <div className="bg-blue-500">
      <div className="text-center text-white py-10">
        <h5 className="text-black">Testimonial</h5>
        <h1 className="text-4xl md:w-96 mx-auto leading-noral font-bold mb-12">
          Read What Others Have To Say{" "}
        </h1>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-6 group">
            <div className="bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl  mix-blend-hard-light">
                <img src={Home} alt="" className="h-20 max-auto mx-auto my-auto rounded-full" />
                <h4 className="uppercase text-xl font-bold">Jane Doe</h4>
                <p className="text-sm leading-7 my-3 font-semibold">
                With Kanza, I've not only enjoyed attractive returns on my investments but also
                 contributed to the growth of the real estate sector in Kenya
                </p>
                {/* <button className="bg-blue-700 py-2.5 px-8 rounded-full">
                    Get In Touch
                </button> */}
            </div>
            <div className="bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 p-8 rounded-xl mix-blend-hard-light">
                <img src={pic} alt="" className="h-20 max-auto mx-auto my-auto rounded-full" />
                <h4 className="uppercase text-xl font-bold">Peter Jackson</h4>
                <p className="text-sm leading-7 my-3 font-semibold">
                As an avid investor, I can't speak highly enough about my experience with Kanza.
                 Being a fintech company based in Nairobi, Kenya,
                  they have revolutionized the way I invest in real
                 estate projects through their online crowdfunding platform.
                </p>
                {/* <button className="bg-blue-700 py-2.5 px-8 rounded-full">
                    Get In Touch
                </button> */}
            </div>
            <div className="bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 p-8 rounded-xl mix-blend-hard-light">
                <img src={pic1} alt="" className="h-20 max-auto mx-auto my-auto rounded-full" />
                <h4 className="uppercase text-xl font-bold">Olive Yew</h4>
                <p className="text-sm leading-7 my-3 font-semibold">
                What sets Kanza apart is the sense of community they foster.
                 Engaging with other investors and sharing insights through the platform's interactive
                 features has been an enriching experience
                </p>
                {/* <button className="bg-blue-700 py-2.5 px-8 rounded-full">
                    Get In Touch
                </button> */}
            </div>
        </div>
      </div>
    </div>
  );
}
export default Testmonial;
