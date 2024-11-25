import {
  Archive,
  ArchiveRestore,
  FilePenLine,
  FileVideo,
  Moon,
  Plus,
  Search,
  Settings,
  Trash2,
} from "lucide-react";
import React from "react";
import Footer from "../partials/Footer";
import { imgPath } from "@/components/helpers/functions-general";
import SideNavigation from "../partials/SideNavigation";
import SearchBar from "../partials/SearchBar";
import Pills from "../partials/Pills";
import ModalDelete from "../partials/modals/ModalDelete";
import ModalConfirm from "../partials/modals/ModalConfirm";
import ModalValidation from "../partials/modals/ModalValidation";
import ModalError from "../partials/modals/ModalError";
import ToastSuccess from "../partials/ToastSuccess";
import LoadMore from "../partials/LoadMore";
import SpinnerWindows from "../partials/spinners/SpinnerWindows";
import SpinnerTable from "../partials/spinners/SpinnerTable";
import TableLoader from "../partials/TableLoader";
import IconNoData from "../partials/IconNoData";
import IconServerError from "../partials/IconServerError";
import ModalAddMovie from "./ModalAddMovie";
import Header2 from "../partials/Header2";
import MoviesTable from "./MoviesTable";
import ModalViewMovie from "./ModalViewMovie";
import { StoreContext } from "@/components/store/storeContext";
import { setIsAdd, setMessage } from "@/components/store/storeAction";

const Movies = () => {
  const {dispatch, store } = React.useContext(StoreContext);

    const handleAdd = () => {
      dispatch(setIsAdd(true));
    };

  // const { dispatch } = React.useContext(StoreContext);

  // const handleChangeLoadmoreText = () =>  dispatch(setMessage("Loverboy"));

  return (
    <>
      <section className="layout-main">
        <div className="layout-division">
          <SideNavigation menu="movies"/>
          <main>
            <Header2 title="Movies" subtitle="List of available movies" />
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
          
          {store.validate && <ModalValidation/>}
          {store.error && <ModalError/>}
          {store.isAdd && <ToastSuccess />}
          {/* <SpinnerWindows /> */}
          {store.isAdd && <ModalAddMovie />}
          {store.isView && <ModalViewMovie />}
          
    </>
  );
};

export default Movies;