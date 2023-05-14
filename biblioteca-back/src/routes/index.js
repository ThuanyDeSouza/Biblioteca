import express from 'express';

import booksRouter from "./books/index.js";


const router = express();

router.use('/books', booksRouter)


export default router;