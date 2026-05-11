import React, {useState} from 'react'
import DataTable from 'react-data-table-component';
import { useSelector } from "react-redux";


const TabularList = ({tableData, columns, totalCount, limit, currentPage, handlePageChange}) => {
     const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    const paginationComponentOptions = {
        noRowsPerPage: true,
    };

  return (
    <div className="min-w-[600px] lg:min-w-[800px] overflow-hidden">
                  <DataTable
                      columns={columns}
                      data={tableData}
                      highlightOnHover
                      responsive
                      persistTableHead
                      pagination
                      paginationServer
                      paginationTotalRows={totalCount}
                      paginationPerPage={limit}
                      paginationDefaultPage={currentPage}
                      onChangePage={handlePageChange}
                      paginationComponentOptions={paginationComponentOptions}
                      customStyles={{
                          headRow: {
                              style: {
                                  borderTopLeftRadius: "none",
                                  borderTopRightRadius: "none",
                                  outline: "none",
                                  overflow: "hidden",
                              },
                          },
                          rows: {
                              style: {
                                  minHeight: "48px",
                                  borderBottom: "none",
                                  border: "none",
                                  outline: "none",
                              },
                          },
                          headCells: {
                              style: {
                                  fontSize: "14px",
                                  fontWeight: 600,
                                  color: "#6b7280",
                                  backgroundColor: isDarkMode ? "#1D1D1D" : "#fff",
                                  paddingLeft: "16px",
                                  paddingRight: "16px",
                              },
                          },
                          cells: {
                              style: {
                                  paddingLeft: "14px",
                                  paddingRight: "14px",
                                  paddingTop: "20px",
                                  fontSize: "14px",
                                  backgroundColor: isDarkMode ? "#1D1D1D" : "#fff",
                                  color: isDarkMode ? "#D5D5D5" : "#374151",
                                  borderBottom: "none",
                              },
                          },
                          pagination: {
                              style: {
                                  color: isDarkMode ? "#ffff" : "#333333",
                                  fontSize: '14px',
                                  minHeight: '56px',
                                  backgroundColor: isDarkMode ? "#1D1D1D" : "#fff",
                                  paddingTop: '0.8rem',
  
                                  borderTop: '1px solid #dee2e6',
                              },
                              pageButtonsStyle: {
                                  borderRadius: '50%',
                                  height: '30px',
                                  width: '30px',
                                  padding: '2px',
                                  cursor: 'pointer',
                                  transition: '0.4s',
                                  color: isDarkMode ? "#6b7280" : "#333333",
                                  fill: isDarkMode ? "#6b7280" : "#333333",
                                  marginInline: '0.2em',
                                  backgroundColor: isDarkMode ? "#D5D5D5" : "#3333",
                                  '&:hover:not(:disabled)': {
                                      backgroundColor: isDarkMode ? "#6b7280" : "#6b7280",
                                      fill: isDarkMode ? "#333333" : "#fff"
                                  },
                                  '&:focus': {
                                      outline: 'none',
                                      backgroundColor: '#0056b3',
                                  },
                              },
                          },
                      }}
                  />
  
              </div>
  )
}

export default TabularList
