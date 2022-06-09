import React, { useState }  from 'react';
import "./bookForm.css"

const BookForm = (props) => {
    const [title, setTitle] = useState(props.title);
    const [author, setAuthor] = useState(props.author);
    const [published, setPublished] = useState(props.published);
    const [isbn, setIsbn] = useState(props.isbn);
    const [publisher, setPublisher] = useState(props.publisher);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    }

    const handlePublishedChange = (e) => {
        setPublished(e.target.value);
    }

    const handleIsbnChange = (e) => {
        setIsbn(e.target.value);
    }

    const handlePublisherChange = (e) => {
        setPublisher(e.target.value);
    }

    const handleBookSubmit = () => {
        props.handleBookSubmit({
            "title": title,
            "author": author,
            "published": published,
            "isbn": isbn,
            "publisher": publisher
        })
    }

    return (
        <div>
            <label htmlFor="title">Book title:</label>
            <input value={title} onChange={handleTitleChange} type="text" id="title" name="title" required maxLength="60" size="30" />

            <label htmlFor="author">Book author:</label>
            <input value={author} onChange={handleAuthorChange} type="text" id="author" name="author" required maxLength="60" size="30" />

            <label htmlFor="published">Published:</label>
            <input value={published} onChange={handlePublishedChange} type="text" id="published" name="published" required maxLength="60" size="30" />

            <label htmlFor="isbn">ISBN:</label>
            <input value={isbn} onChange={handleIsbnChange} type="number" id="isbn" name="isbn" required maxLength="60" size="30" />

            <label htmlFor="publisher">Publisher:</label>
            <input value={publisher} onChange={handlePublisherChange} type="text" id="publisher" name="publisher" required maxLength="60" size="30" />
            <br/>
            <button className="favorite styled" onClick={handleBookSubmit}>{props.buttonLabel}</button>
        </div>
    );
}

export default BookForm;
