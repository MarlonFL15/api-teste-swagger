const {query} = require('../database/connection')

module.exports = class BlogService{
    static async findAll(){
        const sql = 'select * from blog;'
        return await query(sql)
    }
    static async findById(id){
        const sql = `select * from blog where id=${id};`
        const result = await query(sql)
        return result.length != 0 ? result[0]:false
    }
    static async insert(blog){
        const sql = `insert into blog(titulo, texto, datacriacao) values('${blog.titulo}', '${blog.texto}', curdate())`
        console.log(sql)
        return await query(sql)
    }

    static async update(id, blog){
        const sql = `update blog set titulo='${blog.titulo}', texto='${blog.texto}' where id=${id}`
        console.log(sql)
        return await query(sql)
    }
    static async deleteById(id){
        const sql = `delete from blog where id=${id}`
        console.log(sql)
        return await query(sql)
    }

    static async deleteAll(){
        const sql = `delete from blog`
        console.log(sql)
        return await query(sql)
    }
    
}