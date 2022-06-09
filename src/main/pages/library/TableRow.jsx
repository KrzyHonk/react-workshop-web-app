import React from 'react';
import "./table.css"

const TableRow = ({book}) => {
    const {id, title, author, published, isbn, publisher} = book;

    return <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{author}</td>
        <td>{published}</td>
        <td>{isbn}</td>
        <td>{publisher}</td>
        {/* TODO Add buttons for delete and edit */}
    </tr>
}

export default TableRow;
