import React from "react";
import TextField from '@mui/material/TextField';;

const Text = ({ book, setBook}) => {

    const handleInputChange = (event) => {
        setBook({...book, [event.target.name]: event.target.value});
    };
    return (
        <div>
            <TextField
                    autoFocus
                    margin="dense"
                    name="Author"
                    value={book.Author}
                    onChange={handleInputChange}
                    id="name"
                    label="Author"
                    type="text"
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    name="Title"
                    value={book.Title}
                    onChange={handleInputChange}
                    id="name"
                    label="Title"
                    type="text"
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    name="Year"
                    value={book.Year}
                    onChange={handleInputChange}
                    id="name"
                    label="Year"
                    type="text"
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    name="ISBN"
                    value={book.ISBN}
                    onChange={handleInputChange}
                    id="name"
                    label="ISBN"
                    type="text"
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    name="Price"
                    value={book.Price}
                    onChange={handleInputChange}
                    id="name"
                    label="Price"
                    type="text"
                    fullWidth
                />
        </div>
    );
}

export default Text;