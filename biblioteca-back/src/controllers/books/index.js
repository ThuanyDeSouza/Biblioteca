import booksService from "../../services/books/index.js"

const get = async (req, res)  => {
    const id = req.params.id
    const book = await booksService.get(id);
    res.status(200).json(book)
}

const index = async (req, res)  => {
    const books = await booksService.index()
    res.status(200).json(books)
}

const create = async (req, res)  => {
    const params = req.body
    const book = await booksService.create(params)
    res.status(200).json(book)
}

const update = async (req, res)  => {
    const params = req.body
    const book = await booksService.update(params)
    res.status(200).json(book)
}

const destroy = async (req, res)  => {
    const id = req.params.id
    const deleted = await booksService.destroy(id)
    console.log(deleted)
    if(deleted) {
        res.status(200).json({"sucessfull": `register with id ${id} deleted sucessfully`})
    } else {
        res.status(412).json({"Precondition failed": `cannot delete register with id ${id} or it cannot be found `})
    }
}

export default {
    get,
    index,
    create,
    update,
    destroy
}