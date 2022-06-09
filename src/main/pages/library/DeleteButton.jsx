import React from 'react';
import "./table.css";
import "./bookForm.css";

const DeleteButton = () => {
    const handleBookRemoval = () => {
        // TODO Implement book removal
    }

    return <button className="favorite styled" onClick={handleBookRemoval}>Delete</button>
}

export default DeleteButton;
