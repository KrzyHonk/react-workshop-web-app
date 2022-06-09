import React from 'react';
import "./table.css"
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const TableRow = ({book, refreshBookList}) => {
    const {id, title, author, published, isbn, publisher} = book;

    return <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{author}</td>
        <td>{published}</td>
        <td>{isbn}</td>
        <td>{publisher}</td>
        <td>
            <EditButton {...book} />
        </td>
        <td>
            <DeleteButton bookId={book.id} refreshBookList={refreshBookList}/>
        </td>
    </tr>
}

export default TableRow;
