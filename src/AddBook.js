import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from "react";
import Text from "./TextField";

const AddBook = (props) => {
    const [open, setOpen] = useState(false);
    const [book, setBook] = useState({Author: "", Title: "", Year: "", ISBN: "", Price: ""});

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setBook({Author: "", Title: "", Year: "", ISBN: "", Price: ""});
    };

    const handleSave = () => {
        if(book.Author === "" || book.Title === "" || book.Year === "" || book.ISBN === "" || book.Price === "")
        {
           alert("Please fill all the fields");
        }else{
            props.newBook(book);
            setBook({Author: "", Title: "", Year: "", ISBN: "", Price: ""})
            handleClose();   
        }
    };
    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>ADD BOOK</Button>
            <br/>
            <br/>
            <Dialog open={open} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New Book</DialogTitle>
                <DialogContent>
                    <Text book={book} setBook={setBook}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleSave} color="primary">Save</Button>
                </DialogActions>  
            </Dialog>   
        </div>
    );
}

export default AddBook;