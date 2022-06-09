import React, {useState} from 'react';
import TableHeader from './TableHeader';
import TableBody from "./TableBody";
import "./table.css"
import TableFooter from "./TableFooter";

const LibraryPage = () => {
    const [bookList, setBookList] = useState([]);

    // TODO Request list of books from backend

    return (
        <div>
            <table>
                <TableHeader/>
                <TableBody bookList={bookList}/>
                <TableFooter/>
            </table>
        </div>
    );
}

export default LibraryPage;
