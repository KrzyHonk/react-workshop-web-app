export const getBooks = () => {
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    };

    return fetch(process.env.REACT_APP_BACKEND_URL + '/books', options).catch(handleError);
};

export const getBookById = (id) => {
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    };

    return fetch(process.env.REACT_APP_BACKEND_URL + '/books/' + id, options).catch(handleError);
};

export const addBook = (body) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };

    return fetch(process.env.REACT_APP_BACKEND_URL + '/books', options).catch(handleError);
};

export const updateBook = (id, body) => {
    const options = {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };

    return fetch(process.env.REACT_APP_BACKEND_URL + '/books/' + id, options).catch(handleError);
};

export const deleteBookById = (id) => {
    const options = {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
        },
    };

    return fetch(process.env.REACT_APP_BACKEND_URL + '/books/' + id, options).catch(handleError);
};

const handleError = (reason) => {
    return Promise.reject({message: `Could not connect to the server - ${reason.message}`});
};
