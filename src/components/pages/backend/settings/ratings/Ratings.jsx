import React from 'react'
import TableLoader from '../../partials/TableLoader'
import IconServerError from '../../partials/IconServerError'
import Pills from '../../partials/Pills'
import { Archive, ArchiveRestore, FilePenLine, FileVideo, Plus, Trash2 } from 'lucide-react'
import { StoreContext } from '@/components/store/storeContext'
import { setIsConfirm, setIsDelete } from '@/components/store/storeAction'
import ModalDelete from '../../partials/modals/ModalDelete'

const Ratings = () => {

  const {store, dispatch } = React.useContext(StoreContext);
    const handleAdd  = () => {
      dispatch(setIsDelete(true));
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
    <div className="p-4 bg-primary rounded-md mt-10 border border-line relative">
      <button className='btn btn-add' onClick={() => handleAdd}>
        <Plus size={16}/>
        Add new
      </button>
    {/* <SpinnerTable /> */}
    <div className="table-wrapper custom-scroll">
      {/* <TableLoader count={20} cols={4}/> */}
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Title</th>
            <th>Ratings</th>
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
                  {true ? (
                    <>
                      <li>
                        <button
                          className="tooltip"
                          data-tooltip="View"
                          onClick={() => handleView}
                        >
                          <FileVideo />
                        </button>
                      </li>
                      <li>
                        <button
                          className="tooltip"
                          data-tooltip="Edit"
                          onClick={() => handleAdd}
                        >
                          <FilePenLine />
                        </button>
                      </li>
                      <li>
                        <button
                          className="tooltip"
                          data-tooltip="Archive"
                           onClick={() => handleArchive}
                        >
                          <Archive />
                        </button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <button
                          className="tooltip"
                          data-tooltip="Restore"
                          onClick={() => handleRestore}
                        >
                          <Restore />
                        </button>
                      </li>
                      <li>
                        <button
                          className="tool-tip"
                          data-tooltip="Delete"
                          onClick={() => handleDelete}
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
    </div>
  </div>
  {store.setIsAdd && <ModalAdd/>}
  {store.isDelete && <ModalDelete/>}
  {store.isConfirm && <ModalConfirm/>}
  )
}

export default Ratings
