import React from 'react';
import "./table.css"

const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Date of publishing</th>
            <th>ISBN</th>
            <th>Publisher</th>
            <th></th>
            <th></th>
        </tr>
        </thead>
    )
}

export default TableHeader;
