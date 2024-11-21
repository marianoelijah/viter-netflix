import { Trash2, X } from 'lucide-react';
import React from 'react'
import ModalWrapper from './ModalWrapper';

const ModalValidation = () => {
  return (
    <>
            <ModalWrapper />
                <div className="modal-main bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[400px] w-full rounded-md border border-line">
                    <div className="modal-header flex gap-2 p-2 items-center border-b border-line mb-2">
                        <Trash2 size={16} stroke={"yellow"} /> 
                        <span className='text-warning'>Confirm</span>
                        <button className='ml-auto'>
                            <X />
                        </button>
                    </div>
                    <div className='modal-body p-2 py-4 text-center'>
                     <Info className='text-info mx-auto mb-4' size={40} />
                         <h5 className='text-info'>Validation issue</h5>
                         <p className='mb-0 text-center '>The title already exist</p>
                         <button className='btn btn-info w-full'>Okay</button>
                    </div>
                </div>
            <ModalWrapper /> 
    </>
  )
}

export default ModalValidation;
