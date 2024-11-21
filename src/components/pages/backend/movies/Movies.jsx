import { Archive, ArchiveRestore, FilePenLine, FileVideo, Moon, Plus, Search, Settings, Trash2 } from 'lucide-react';
import React from 'react'
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import { imgPath } from '@/components/helpers/functions-general';
import SideNavigation from '../partials/SideNavigation';
import Searchbar from '../partials/Searchbar';
import Pills from '@/components/partials/Pills';
import ModalDelete from '@/components/partials/modals/ModalDelete';
import ModalWrapper from '@/components/partials/modals/ModalWrapper';
import ModalError from '@/components/partials/modals/ModalError';

const Movies = () => {
  return (
    <>
        <section className='layout-main'>
            <div className="layout-division">
            <SideNavigation />
                <main>
                    <Header />
                    <div className='p-8 '>
                      <div className='flex justify-between items-center'>
                    <Searchbar />
                    
                        
                        <button className='btn btn-add'>
                          <Plus size={16}/> Add New
                        </button>
                      </div>
                      <div className='p-4 bg-secondary rounded-md mt-10'>
                      <div className='table-wrapper custom-scroll'>
                        <table>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Status</th>
                              <th>Title</th>
                              <th>Year</th>
                              <th>Duration</th>
                              <th></th>
                              </tr>
                            </thead>
                          <tbody>
                            {Array.from(Array(28).keys()).map((i) => (
                              <tr key={i}>
                              <td>{i + 1 }.</td>
                              <td><Pills /></td>
                              <td>Wedding Singer</td>
                              <td>1999</td>
                              <td>1hr 40mins</td>
                              <td>
                                 <ul className='table-action '>
                                  {true ? (
                                    <>
                                    <li>
                                      <button className='tooltip' 
                                      data-tooltip='View'>
                                        <FileVideo />
                                      </button>
                                    </li>
                                    <li>
                                      <button className='tooltip' 
                                      data-tooltip='Edit'>
                                      <FilePenLine />
                                      </button>
                                    </li>
                                    <li>
                                      <button className='tooltip' 
                                      data-tooltip='Archive'>
                                      <Archive />
                                      </button>
                                    </li>
                                    </>
                                  ) : (
                                    <>
                                     <li>
                                      <button className='tooltip' 
                                      data-tooltip='Restore'>
                                      <ArchiveRestore />
                                      </button>
                                    </li>
                                    <li>
                                      <button className='tooltip' 
                                      data-tooltip='Delete'>
                                      <Trash2 />
                                      </button>
                                    </li>
                                    </>
                                  )}
                                    
                                 </ul>
                              </td>
                            </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      </div>
                    </div>
                    <Footer />
                </main>
            </div>
        </section>
        {/* <ModalDelete /> */}
        {/* <ModalConfirm /> */}
        {/* <ModalValidation /> */}
        <ModalError />
    </>
  )
}

export default Movies;
