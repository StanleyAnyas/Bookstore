import './App.css';
import React, { useCallback } from 'react';
import { useState, useEffect } from 'react';
import { DataGrid, } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBook from './AddBook';


function App() {
  const [bookList, setBookList] = useState([]);

  const fetchBooks = useCallback(() => {
    try{
      fetch('https://bookstore-3658b-default-rtdb.europe-west1.firebasedatabase.app/books/.json')
      .then(response => response.json())
     .then(data => {
       addKeys(data);
     });
    } catch (error) {
      console.log(error);
    }
  }, []);


  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const newBook = (book) => {
    fetch('https://bookstore-3658b-default-rtdb.europe-west1.firebasedatabase.app/books/.json',
     {
        method: 'POST',
        body: JSON.stringify(book),
        
      })
      .then(response => fetchBooks())
      .catch(error => console.log(error));
  };

  const addKeys = (data) => {
    const keys = Object.keys(data);
    const valueKeys = Object.values(data).map((item, index) => 
    Object.defineProperty(item, "id", {value: keys[index] }));
    setBookList(valueKeys);
  };

  const deleteBookFromDB = (id) => {
    fetch(`https://bookstore-3658b-default-rtdb.europe-west1.firebasedatabase.app/books/${id}/.json`,
    {
      method: 'DELETE',
    })
    .then(response => fetchBooks())
    .catch(error => console.log(error));
  };
  const columns = [
    {field: 'Author', headerName: 'Author', width: 200, editable: true},
    {field: 'Title', headerName: 'Title', width: 200, editable: true},
    {field: 'Year', headerName: 'Year', width: 200, editable: true},
    {field: 'ISBN', headerName: 'ISBN', width: 200, editable: true},
    {field: 'Price', headerName: 'Price', width: 200, editable: true},
    {field: "Delete", headerName: "", width: 100, 
    filterable: false, sortable: false, disableColumnMenu: true,
    cellRendererFramework: (params) => {
      return (
        <IconButton aria-label="delete" color='error' onClick={() => deleteBookFromDB(params.data.id)}>
          <DeleteIcon />
        </IconButton>
      )
    }
    }
  ];

  return (
    <div className="App">
      <AppBar position="static" sx={{backgroundColor: "red"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{backgroundColor: "red" }} noWrap>
            Bookstore
          </Typography>
        </Toolbar>
      </AppBar>
      <br/>
      <AddBook newBook={newBook} />
      <div className="ag-theme-alpine" style={{height: 500, width: 1100, margin: "auto"}}>
        <AgGridReact rowData={bookList} columnDefs={columns} pagination={true} paginationPageSize={5}>
          <Box sx={{ width: '100%' }}>
            <DataGrid rows={bookList} columns={columns} pageSize={5} checkboxSelection />
          </Box>
        </AgGridReact>
      </div>
    </div>
  );
}

export default App;
