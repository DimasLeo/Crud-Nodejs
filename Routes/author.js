const express = require('express')
const router = express.Router()
const {
    getAuthors,
    getAuthor,
    addAuthor,
    updateAuthor,
    deleteAuthor
    
} = require('../controllers/AuthorController')

//Router menampilkan data
router.get('/', getAuthors)

//Router mengirim data
router.post('/', addAuthor)

//Router untuk menampilkan data berdasarkann data buku
router.get('/:id', getAuthor)

//Router Perbarui data berdasarkan id data buku
router.put('/:id', updateAuthor)


//Router Hapus data
router.delete('/:id', deleteAuthor)

module.exports = router