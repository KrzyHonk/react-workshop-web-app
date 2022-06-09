import React from 'react';
import BookForm from "./BookForm";
import {addBook} from './fetchService';
import "./bookForm.css";
import {useNavigate} from "react-router-dom";
import {library} from "../../routing/appRoutes";

const AddBookForm = (props) => {
    const navigate = useNavigate();

    const addNewBook = (newBook) => {
        addBook(newBook)
            .then((res) => {
                if (res.ok) {
                    console.log('Added new book successfully')
                    navigate(library);
                } else {
                    throw Error('Failed to add new book');
                }
            });
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
