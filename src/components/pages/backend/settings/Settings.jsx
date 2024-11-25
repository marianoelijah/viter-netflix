import React from "react";
import SideNavigation from "../partials/SideNavigation";
import Header2 from "../partials/Header2";
import Footer from "../partials/Footer";
import { ArchiveRestore, Plus, Trash2 } from "lucide-react";
import IconNoData from "../partials/IconNoData";
import Pills from "../partials/Pills";
import TableLoader from "../partials/TableLoader";
import IconServerError from "../partials/IconServerError";
import Category from "./category/Category";
import Ratings from "./ratings/Ratings";
import Genre from "./genre/Genre";

const Settings  = () => {
  const [tableIndex, setTableIndex] = React.useState(0);
  const tables = [<Category />, <Ratings />, <Genre />];

  const handleChangeIndex = (index) => setTableIndex(index);
  return (
    <>
      <section className="layout-main">
        <div className="layout-division">
          <SideNavigation />
          <main>
            <Header2 title="Settings" subtitle="Manage Movies Options" />
            <div className="p-8">
              <ul className="flex leading-tight gap-10 font-semibold mb-5 border-b border-light">
                <li>
                  <button>General</button>
                </li>
                <li
                  className={`${
                    tableIndex === 0
                      ? "border-b-4 border-accent pb-5 text-accent"
                      : ""
                  }`}
                >
                  <button onClick={() => handleChangeIndex(0)}>Category</button>
                </li>
                <li
                  className={`${
                    tableIndex === 1
                      ? "border-b-4 border-accent pb-5 text-accent"
                      : ""
                  }`}
                >
                  <button onClick={() => handleChangeIndex(1)}>Ratings</button>
                </li>
                <li
                  className={`${
                    tableIndex === 2
                      ? "border-b-4 border-accent pb-5 text-accent"
                      : ""
                  }`}
                >
                  <button onClick={() => handleChangeIndex(2)}>Genre</button>
                </li>
              </ul>
              {tables[tableIndex]}
            </div>

            <Footer />
          </main>
        </div>
      </section>
    </>
  );
};

export default Settings;