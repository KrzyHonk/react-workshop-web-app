import React from 'react';
import BookForm from "./BookForm";
import {updateBook} from './fetchService';
import "./bookForm.css";
import {useNavigate, useLocation} from "react-router-dom";
import {library} from "../../routing/appRoutes";

const EditBookForm = () => {
    const navigate = useNavigate();
    const {state}  = useLocation();

    const handleBookUpdate = (updatedBook) => {
        updatedBook.id = state.bookToUpdate.id;
        updateBook(state.bookToUpdate.id, updatedBook)
            .then((res) => {
                if (res.ok) {
                    console.log('Updated book successfully')
                    navigate(library);
                } else {
                    throw Error('Failed to update book');
                }
            });
    }

    return (
        <BookForm
            {...state.bookToUpdate}
            handleBookSubmit={handleBookUpdate}
            buttonLabel={'Update book'}
        />
    );
}

export default EditBookForm;
