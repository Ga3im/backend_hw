const Book = require('../models/book');

const getBooks = (req, res)=>{
    return Book.find({}).then((data)=>{
        res.status(200).send(data)
    }).catch(e => res.status(500).send(e.message))
}

const getBook = (req, res)=>{
    const { book_id } = req.params;
    return Book.findById(book_id).then(
        (book)=> res.status(200).send(book))
        .catch(e => res.status(500).send(e.message))
}

const createBook = (req, res)=>{
  return Book.create({...req.body}).then(
    (book) => res.status(200).send(book))
    .catch(e => res.status(500).send(e.message))
}

const updateBook = (req, res)=>{
    const { book_id } = req.params;
    return Book.findByIdAndUpdate(book_id, {...req.body}).then(
        (book)=> res.status(200).send(book))
        .catch(e => res.status(500).send(e.message))
}

const deleteBook = (req, res)=>{
    const { book_id } = req.params;
    return Book.findByIdAndDelete(book_id).then(
        ()=> res.status(200).send('Книга успешно удалена'))
        .catch(e => res.status(500).send(e.message))
}

module.exports = {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook,
}