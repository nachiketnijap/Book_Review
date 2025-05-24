const express =require('express')
const authMiddleware = require('../middleware/auth-middleware');
const { addBook, getBooks, getBookDetails, searchBookByTitleOrAuthor } = require('../controllers/book-controller');

const router = express.Router();
// add new book 
router.post('/books',authMiddleware,addBook)

//get all books
router.get('/books',getBooks)

// get books details - review, ratings
router.get('/books/:id',getBookDetails)

// search book by author or title
router.get('/search',searchBookByTitleOrAuthor)

module.exports = router;