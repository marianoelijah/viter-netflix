import React from "react";
import { imgPath } from "../../../helpers/functions-general";
import { Link, NavLink } from "react-router-dom";
import { Search } from "lucide-react";

const HeaderNav  = () => {
  return (
    <section className="bg-black py-4">
      <div className="container">
        <div className="wrapper flex justify-between items-center mx-20">
          <div className="flex gap-10 items-center">
            <NavLink to="/">
              <img src={`${imgPath}/logo-netflix.png`} alt="" />
            </NavLink>

            <ul className="flex gap-4 text-white text-[18px]">
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
            <Search size={20} stroke="white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderNav;