import { Trash2, X } from 'lucide-react';
import React from 'react'
import ModalWrapper from './ModalWrapper';

const ModalDelete = () => {
  return (
    <>
            <ModalWrapper />
                <div className="modal-main bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[400px] w-full rounded-md border border-line">
                    <div className="modal-header flex gap-2 p-2 items-center border-b border-line mb-2">
                        <Trash2 size={16} stroke={"red"} /> 
                        <span className='text-alert'>Delete</span>
                        <button className='ml-auto'>
                            <X />
                        </button>
                    </div>
                    <div className='modal-body p-2 py-4'>
                        <p className='mb-0 text-center '>Are you sure you want to remove this movie?</p>
                        <div className='flex justify-end gap-3 mt-5'>
                            <button className='btn btn-alert'>Delete</button>
                            <button className='btn btn-cancel'>Cancel</button>
                        </div>
                    </div>
                </div>
            <ModalWrapper />
            
        
    </>
  )
}

export default ModalDelete;
