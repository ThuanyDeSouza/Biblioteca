import express from 'express';
import booksController from '../../controllers/books/index.js'

const booksRouter = express();

booksRouter.post('/', booksController.create)
booksRouter.get('/:id', booksController.get)
booksRouter.get('/', booksController.index)
booksRouter.put('/', booksController.update)
booksRouter.delete('/:id', booksController.destroy)


export default booksRouter;