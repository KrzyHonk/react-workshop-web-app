import React from 'react';
import {useLocation} from "react-router-dom";
import BookForm from "./BookForm";
import "./bookForm.css";

const EditBookForm = () => {
    const {state} = useLocation();

    const handleBookUpdate = (updatedBook) => {
        // TODO Implement updating book (sending PUT request to backend)
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
