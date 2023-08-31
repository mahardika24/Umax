import React, { useState } from 'react';
import { useTable, useGlobalFilter } from 'react-table';
import data from './HistoryData';


function History() {
  const [tableData, setTableData] = useState(data);
  

  

  const columns = React.useMemo(
    () => [
      {
        Header: 'Last Update',
        accessor: 'Update',
      },
      {
        Header: 'Amount Spent',
        accessor: 'Amount',
      },
      {
        Header: 'Reach',
        accessor: 'Reach',
      },
      {
        Header: 'Impressions',
        accessor: 'Impressions',
      },
      {
        Header: 'Frequency',
        accessor: 'Frequency',
      },
      {
        Header: 'RAR',
        accessor: 'RAR',
      },
      {
        Header: 'CPC',
        accessor: 'CPC',
      },
      {
        Header: 'CTR',
        accessor: 'CTR',
      },
      {
        Header: 'OCLP',
        accessor: 'OCLP',
      },
      {
        Header: 'CPR',
        accessor: 'CPR',
      },
      {
        Header: 'ATC',
        accessor: 'ATC',
      },
      {
        Header: 'ROAS',
        accessor: 'ROAS',
      },
      
    ],
    []
  );

  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter
  );

  

  return (
    <div className="relative rounded-lg ">
    <div className="container mx-auto p-4">
      <div className="mb-4 flex space-x-4 justify-between">

      {/* header */}
             
      </div>
      <div className="w-full bg-white overflow-x-scroll">
        <table {...getTableProps()} className="table-auto border-collapse border-2 w-full">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} >
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="p-2 text-sm  border-2"
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className="border-2 hover:bg-gray-100"
                >
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="p-2 border-2"
                      >
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default History;

