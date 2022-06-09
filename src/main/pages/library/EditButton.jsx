import React from 'react';
import {useNavigate} from "react-router-dom";
import {editBook} from "../../routing/appRoutes";
import "./table.css";
import "./bookForm.css";

const EditButton = (props) => {
    const navigate = useNavigate();

    const navigateToEditBookPage = () => {
        navigate(editBook, {state: {bookToUpdate: {...props}}});
    }

    return <button className="favorite styled" onClick={navigateToEditBookPage}>Edit</button>
}

export default EditButton;
