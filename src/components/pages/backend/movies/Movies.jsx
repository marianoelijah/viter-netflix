import { setIsAdd } from "@/components/store/storeAction";
import { StoreContext } from "@/components/store/storeContext";
import {
  Plus
} from "lucide-react";
import React from "react";
import Footer from "../partials/Footer";
import Header2 from "../partials/Header2";
import ModalError from "../partials/modals/ModalError";
import ModalValidation from "../partials/modals/ModalValidation";
import SearchBar from "../partials/SearchBar";
import SideNavigation from "../partials/SideNavigation";
import ToastSuccess from "../partials/ToastSuccess";
import ModalAddMovie from "./ModalAddMovie";
import MoviesTable from "./MoviesTable";

const Movies = () => {
  const { dispatch, store } = React.useContext(StoreContext);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
  };

  // const { dispatch } = React.useContext(StoreContext);
  // const handleChangeLoadmoreText = () => dispatch(setMessage("Loverboy"));

  return (
    <>
      <section className="layout-main">
        <div className="layout-division">
          <SideNavigation menu="Movies" />
          <main>
            <Header2 title="Movies" subtitle="List of Available Movies" />
            <div className="p-8">
              <div className="flex justify-between items-center ">
                <SearchBar />

                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} />
                  Add New
                </button>
              </div>
              <MoviesTable />
            </div>
            <Footer />
          </main>
        </div>
      </section>

      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSuccess />}
      {/* <SpinnerWindow /> */}

      {store.isAdd && <ModalAddMovie />}
    </>
  );
};

export default Movies;