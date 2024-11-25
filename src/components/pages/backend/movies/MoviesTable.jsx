import React from 'react'
import TableLoader from '../partials/TableLoader'
import IconServerError from '../partials/IconServerError'
import Pills from '../partials/Pills'
import { Archive, ArchiveRestore, FilePenLine, FileVideo, Trash2 } from 'lucide-react'
import LoadMore from '../partials/LoadMore'
import SpinnerTable from '../partials/spinners/SpinnerTable'
import IconNoData from '../partials/IconNoData'
import { StoreContext } from '@/components/store/storeContext'
import { setIsConfirm, setIsDelete, setIsView } from '@/components/store/storeAction'
import ModalConfirm from '../partials/modals/ModalConfirm'
import ModalDelete from '../partials/modals/ModalDelete'

const MoviesTable = () => {
  const {store, dispatch } = React.useContext(StoreContext);

    const handleView = () => {
      dispatch(setIsView(true));
    };

    const handleDelete = () => {
      dispatch(setIsDelete(true));
    };

    const handleRestore = () => {
      dispatch(setIsConfirm(true));
    };

    const handleArchive = () => {
      dispatch(setIsConfirm(true));
    };
  

  return (
    
    <>
         <div className="p-4 bg-primary rounded-md mt-10 border border-line relative">
                {/* <SpinnerTable /> */}
                <div className="table-wrapper custom-scroll">
                  {/* <TableLoader count={20} cols={4}/> */}
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

                      {/* <tr>
                        <td colSpan={100}>
                          <IconNoData />
                        </td>
                      </tr> */}

                      {/* <tr>
                        <td colSpan={100}>
                          <IconServerError />
                        </td>
                      </tr> */}

                      {Array.from(Array(7).keys()).map((i) => (
                        <tr key={i}>
                          <td>{i + 1}.</td>
                          <td>
                            <Pills />
                          </td>
                          <td>Wedding Singer</td>
                          <td>1999</td>
                          <td>1hr 40mins</td>
                          <td>
                            <ul className="table-action">
                              {false ? (
                                <>
                                  <li>
                                    <button
                                      className="tooltip"
                                      data-tooltip="View"
                                      onClick={() => handleView()}
                                    >
                                      <FileVideo />
                                    </button>
                                  </li>
                                  <li>
                                    <button
                                      className="tooltip"
                                      data-tooltip="Edit"
                                    >
                                      <FilePenLine />
                                    </button>
                                  </li>
                                  <li>
                                    <button
                                      className="tooltip"
                                      data-tooltip="Archive"
                                    >
                                      <Archive onClick={() => handleArchive()} />
                                    </button>
                                  </li>
                                </>
                              ) : (
                                <>
                                  <li>
                                    <button
                                      className="tooltip"
                                      data-tooltip="Restore"
                                    >
                                      <ArchiveRestore onClick={() => handleRestore()}/>
                                    </button>
                                  </li>
                                  <li>
                                    <button
                                      className="tool-tip"
                                      data-tooltip="Delete"
                                      onClick={handleDelete}
                                    >
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

                  <LoadMore />
                </div>
              </div>

          {store.isDelete && <ModalDelete/>}
          {store.isConfirm && <ModalConfirm/>}
          {/* <ModalConfirm/> */}
    </>
  )
}

export default MoviesTable;
