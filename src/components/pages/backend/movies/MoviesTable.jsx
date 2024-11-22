import React from 'react'
import TableLoader from '../partials/TableLoader'
import IconServerError from '../partials/IconServerError'
import Pills from '../partials/Pills'
import { Archive, ArchiveRestore, FilePenLine, FileVideo, Trash2 } from 'lucide-react'
import LoadMore from '../partials/LoadMore'
import SpinnerTable from '../partials/spinners/SpinnerTable'
import IconNoData from '../partials/IconNoData'

const MoviesTable = () => {
  return (
    
    <>
         <div className="p-4 bg-primary rounded-md mt-10 border border-line relative">
                {/* <SpinnerTable /> */}
                <div className="table-wrapper custom-scroll">
                  <TableLoader count={20} cols={4}/>
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

                      <tr>
                        <td colSpan={100}>
                          <IconServerError />
                        </td>
                      </tr>

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
                                    >
                                      <ArchiveRestore />
                                    </button>
                                  </li>
                                  <li>
                                    <button
                                      className="tool-tip"
                                      data-tooltip="Delete"
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
    </>
  )
}

export default MoviesTable;
