import React, {useEffect, useState} from 'react';
import TableHeader from './TableHeader';
import TableBody from "./TableBody";
import {getBooks} from './fetchService';
import "./table.css"
import TableFooter from "./TableFooter";

const LibraryPage = () => {
    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        refreshBookList();
    }, [])

    const refreshBookList = () => {
        getBooks()
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw Error('Failed to get book list');
                }
            })
            .then((newBookList) => {
                setBookList(newBookList);
            });
    }

    return (
        <div>
            <table>
                <TableHeader/>
                <TableBody bookList={bookList} refreshBookList={refreshBookList}/>
                <TableFooter/>
            </table>
        </div>
    );
}

export default LibraryPage;
