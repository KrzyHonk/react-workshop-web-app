const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
let counter = 2;

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Add custom routes
server.get('/books', (req, res, next) => {
    const database = router.db;

    const bookList = database.get('books').value();
    setTimeout(() => {
        res.status(200).jsonp(bookList);
    }, 2000);
});

server.get('/books/:id', (req, res, next) => {
    const bookId = Number.parseInt(req.params.id);
    const database = router.db;

    const bookList = database.get('books').value();
    const existingBook = bookList.find((element) => element.id === bookId);

    if (existingBook) {
        setTimeout(() => {
            res.status(200).jsonp(existingBook);
        }, 2000);
    } else {
        setTimeout(() => {
            res.status(404).jsonp({
                message: 'Book not found',
            });
        }, 2000);
    }
});

server.post('/books', (req, res, next) => {
    const newBook = req.body;
    counter = counter + 1;
    newBook.id = counter;
    const database = router.db;
    const bookList = database.get('books').value();

    bookList.push(newBook);
    database.set('books', bookList).write();

    setTimeout(() => {
        res.status(200).jsonp(newBook);
    }, 2000);
});

server.put('/books/:id', (req, res, next) => {
    const updatedBook = req.body;
    const bookId = Number.parseInt(req.params.id);
    const database = router.db;

    const bookList = database.get('books').value();
    const existingBook = bookList.find((element) => element.id === bookId);

    if (existingBook) {
        const updatedBookList = bookList.filter((element) => element.id !== bookId);
        updatedBookList.push(updatedBook);
        database.set('books', updatedBookList).write();

        setTimeout(() => {
            res.status(200).jsonp(updatedBook);
        }, 2000);
    } else {
        setTimeout(() => {
            res.status(400).jsonp({
                message: 'Attempted to update non-existing book',
            });
        }, 2000);
    }
});

server.delete('/books/:id', (req, res, next) => {
    const bookId = Number.parseInt(req.params.id);
    const database = router.db;

    const bookList = database.get('books').value();
    const existingBook = bookList.find((element) => element.id === bookId);

    if (existingBook) {
        const updatedBookList = bookList.filter((element) => element.id !== bookId);
        database.set('books', updatedBookList).write();

        setTimeout(() => {
            res.status(200).jsonp({
                message: 'Successfully removed book',
            });
        }, 2000);
    } else {
        setTimeout(() => {
            res.status(400).jsonp({
                message: 'Attempted to remove non-existing book',
            });
        }, 2000);
    }
});

server.use(router);
server.listen(3001, () => {
    console.log('JSON Server is running');
});
