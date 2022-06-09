import React from 'react';
import {deleteBookById} from "./fetchService";
import "./table.css";
import "./bookForm.css";

const DeleteButton = (props) => {
    const navigateToEditBookPage = () => {
        deleteBookById(props.bookId)
            .then((res) => {
                if (res.ok) {
                    props.refreshBookList();
                } else {
                    throw Error('Failed to remove book by ID');
                }
            });
    }

    return <button className="favorite styled" onClick={navigateToEditBookPage}>Delete</button>
}

export default DeleteButton;
