import React from 'react';
import TableRow from "./TableRow";
import "./table.css"

const TableBody = ({bookList, refreshBookList}) => {
    const renderBooks = () => {
        return bookList.map(book => <TableRow key={book.id} book={book} refreshBookList={refreshBookList} />);
    }

    return (
        <tbody>
        {renderBooks()}
        </tbody>
    )
}

export default TableBody;
