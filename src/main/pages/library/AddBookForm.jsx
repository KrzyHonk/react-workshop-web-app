import React from 'react';
import BookForm from "./BookForm";
import "./bookForm.css";

const AddBookForm = () => {
    const addNewBook = (newBook) => {
        // TODO Implement adding new book (sending POST request to backend)
    }

    return (
        <BookForm
            title=""
            author=""
            published=""
            isbn={0}
            publisher=""
            handleBookSubmit={addNewBook}
            buttonLabel={'Add book'}
        />
    );
}

export default AddBookForm;
