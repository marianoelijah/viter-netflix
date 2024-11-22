import { Play } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import { imgPath } from "./helpers/functions-general";


const Homebanner = () => {
  return (
    <section>
      <div className="wrapper relative text-white">
        <img
          src={`${imgPath}/banner-2.jpg`}
          alt=""
          className="w-screen h-[calc(100vh-55px)] object-cover relative"
        />
        <div className="banner-content absolute top-80 left-20 text-white ">
          <p className="mb-2 text-[18px]">
            2024 Film 1hr 40mins 
            <small className="border border-white px-0.5 text-sm">HD</small>
          </p>
          <h2 className="mb-2 font-bold">Uglies</h2>
          <p className="mb-5 max-w-[650px] text-[20px]">
          Uglies is a 2024 American science fiction drama film directed by McG and written 
          by Jacob Forman, Vanessa Taylor, and Whit Anderson. Based on the novel of the 
          same name by Scott Westerfeld, the plot centers around a future post-apocalyptic 
          dystopian society in which people are considered "ugly" until they become "pretty" 
          by enduring extensive cosmetic surgery at the age of 16.
          </p>
          <div className="flex justify-between px-10 max-w-[350px]">
            <button className="bg-secondary text-white rounded-md flex py-2 px-6 gap-2">
              <Play />
              <NavLink to="/">Play</NavLink>
            </button>
            <button className="bg-white text-black rounded-md flex py-2 px-6 gap-2">
              <NavLink to="/">More Info</NavLink>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homebanner;