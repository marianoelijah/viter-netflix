import React from "react";
import { imgPath } from "../helpers/functions-general";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <section className="bg-primary py-2">
      <div className="container mx-20">
        <div className="wrapper flex justify-between items-center">
          <div className="flex gap-10 items-center">
            <img src={`${imgPath}/header-logo.png`} alt="" />
            <ul className="flex gap-4 text-white">
              <li>
                <Link to="/">TV Shows</Link>
              </li>
              <li>
                <Link to="/">Movies</Link>
              </li>
              <li>
                <Link to="/">Recently Movies</Link>
              </li>
              <li>
                <Link to="/">My List</Link>
              </li>
            </ul>
          </div>
          <div>
            <Search size={18} stroke="white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;