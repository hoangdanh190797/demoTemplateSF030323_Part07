import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import data from "../data/data.json"

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const rows = data;
  // data by import not call useSelect from redux
  

export default function Table() {
  return (
    <div style={{ height: 300, width: '100%', backgroundColor: 'hsl(235, 24%, 19%)', color:'hsl(234, 39%, 85%)'}}>
      <DataGrid
        className=''
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
