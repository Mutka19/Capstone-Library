const express = require('express')
const router = express.Router()
const Book = require('../models/book')

// Get books (all/available/checked-out)
router.get('/', async (req, res) => {
    const avail = req.query.avail === 'true' ? true : req.query.avail === 'false' ? false : undefined;
    try {
      let books;
      if (avail !== undefined) {
        books = await Book.find({ avail });
      } else {
        books = await Book.find();
      }
      res.json(books);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

// Get by id
router.get('/:id', getBook, (req, res) => {
    res.status(200).json(res.book);
});

// Create new book entry
router.post('/', async (req, res) => {
    const book = new Book({
        _id: req.body._id,
        title: req.body.title,
        author: req.body.author,
        publisher: req.body.publisher,
        isbn: req.body.isbn,
        who: req.body.who,
        due: req.body.due,
        avail: req.body.avail
    });

    try {
        const newBook = await book.save();
        res.status(201).json({ message: 'Book created' });
    } catch (err) {
        res.status(403).json({ message: err.message });
    }
});

// Update book
router.put('/:id', getBook, async (req, res) => {
    if(req.body.title != null) {
        res.book.title = req.body.title;
    }
    if(req.body.author != null) {
        res.book.author = req.body.author;
    }
    if(req.body.publisher != null) {
        res.book.publisher = req.body.publisher;
    }
    if(req.body.isbn != null) {
        res.book.isbn = req.body.isbn;
    }
    if(req.body.avail != null) {
        res.book.avail = req.body.avail;
    }
    if(req.body.who != null) {
        res.book.who = req.body.who;
    }
    if(req.body.due != null) {
        res.book.due = req.body.due;
    }

    try {
        const updatedBook = await res.book.save();
        res.status(200).json({ message: 'Book updated' });
    } catch (err) {
        err.
        res.status(400).json({ message: err.message });
    }
  });

// Delete book
router.delete('/:id', async (req, res) => {
    try {
        book = await Book.findById(req.params.id);
        if(book == null) {
            res.status(204).send('No content');
        } else {
            await Book.findByIdAndRemove(req.params.id);
            res.status(200).json({ message: 'Book deleted'});
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
  });

async function getBook(req, res, next) {
    let book;
    try {
        book = await Book.findById(req.params.id);
        if(book == null) {
            return res.status(404).json({ message: 'Book not Found' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.book = book;
    next();
}

module.exports = router