import { setIsAdd } from "@/components/store/storeAction";
import { StoreContext } from "@/components/store/storeContext";
import React from "react";
import ModalWrapper from "../../partials/modals/ModalWrapper";
import { Trash2, X } from "lucide-react";
import SpinnerButton from "../../partials/spinners/SpinnerButton";
import { InputText } from "@/components/helpers/FormInputs";
import { Form, Formik } from "formik";
import * as Yup from 'Yup';

const ModalAddGenre = () => {
  const { dispatch } = React.useContext(StoreContext);
  const handleClose = () => dispatch(setIsAdd(false));

  const yupSchema = Yup.object ({
    genre_title : Yup.string().required("Required"),
  });

  const initVal = {
    genre_title : "",
  }

  return (
    <>
      <ModalWrapper>
      <Formik
        initialValues={initVal}
        validationSchema={yupSchema}
        onSubmit={async (values) => {
          console.log(values)
        }}
      >
        {(props) => {
          return (
        <Form>
        <div className="modal-main bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[400px] w-full rounded-md border border-line">
          <div className="modeal-header flex gap-2 p-2 items-center border-b border-line mb-2">
            <span className="text-body">Add Genre</span>
            <button className="ml-auto" onClick={handleClose}>
              <X />
            </button>
          </div>
          <div className="modal-body p-2 py-4">
            <form action="">
              <div className="input-wrap">
                <InputText
                 label="Genre"
                 type="text"
                 name="genre_title"
                 />
              </div>
            </form>
            <div className="flex justify-end gap-3 mt-5">
              <button className="btn btn-info">
                <SpinnerButton />
                Save
              </button>
              <button className="btn btn-cancel" onClick={handleClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
        </Form>
          );
        }}
      </Formik>
      </ModalWrapper>
      
    </>
  );
};

export default ModalAddGenre;