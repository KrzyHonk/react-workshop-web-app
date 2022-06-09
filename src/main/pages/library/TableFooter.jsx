import React from 'react';
import {useNavigate} from "react-router-dom";
import {addNewBook} from '../../routing/appRoutes';
import "./table.css"
import "./bookForm.css"

const TableFooter = () => {
    const navigate = useNavigate();

    const navigateToNewBookPage = () => {
        navigate(addNewBook);
    }

    return (
        <tfoot>
        <tr>
            <th scope="row">
                <button className="favorite styled" onClick={navigateToNewBookPage}>Add new book</button>
            </th>
        </tr>
        </tfoot>
    )
}

export default TableFooter;
