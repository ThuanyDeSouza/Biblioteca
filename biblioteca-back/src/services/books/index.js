
import DB from "../../db.js"

const index = async () => {
    const registros = await DB.executeQuery('SELECT * FROM livros;')
    return registros
}

const create = async (livro) => {
    const sql = "INSERT INTO livros (livano, livtitulo, livautor) values (?,?,?);"
    const created = await DB.executeQuery(sql, [livro.ano, livro.titulo, livro.autor])

    return await get(created.insertId)

}

const get = async (id) => {
    const sql = "SELECT * FROM livros WHERE livcodigo=?;"
    return await DB.executeQuery(sql, [id])
}

const update = async (livro) => {
    const sql = "UPDATE livros SET livtitulo=?, livano=?, livautor=? WHERE livcodigo=?;"
    const updated =  await DB.executeQuery(sql, [livro.titulo, livro.ano, livro.autor, livro.codigo])
    return await get(livro.codigo)
}


const destroy = async (id) => {
    const sql = "DELETE FROM livros where livcodigo=?;"
    const ret =  await DB.executeQuery(sql, [id])
    return ret.affectedRows > 0;
}

export default {
    index,
    create,
    get,
    update,
    destroy
}