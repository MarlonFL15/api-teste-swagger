const BlogService = require('../services/blogService')

class BlogController{
    async findAll(req, res){
        try{
            const blogs = await BlogService.findAll() 
            return res.send(blogs)
        }
        catch(e){
            console.log(e)
            return res.status(400).send({error: 'Erro ao buscar blogs'})
        }
    }
    async findById(req, res){
        try{
            const blog = await BlogService.findById(req.params.blogId)

            if(!blog)
                return res.status(400).send({error: 'Blog não encontrado'}) 
            else
                return res.send(blog)   
        }
        catch(e){
            console.log(e)
            return res.status(400).send({error: 'Erro ao buscar blog'})
        }
    }
    async insert(req, res){
        try{
            if(!req.body.titulo)
                return res.status(400).send({error: 'O campo "título" é obrigatório'}) 

            if(!req.body.texto) 
                return res.status(400).send({error: 'O campo "texto" é obrigatório'})
            
            await BlogService.insert(req.body)
            return res.send('ok')
        }
        catch(e){
            console.log(e)
            return res.status(400).send({error: 'Erro ao cadastrar blog'}) 
        }
    }
    
    async update(req, res){
        try{
            const blog = await BlogService.findById(req.params.blogId)
            if(!blog)
                return res.status(400).send({error: 'Blog não encontrado'}) 
            
            if(!req.body.titulo)
                return res.status(400).send({error: 'O campo "título" é obrigatório'}) 

            if(!req.body.texto) 
                return res.status(400).send({error: 'O campo "texto" é obrigatório'})

            await BlogService.update(blog.id, req.body)
            res.send('ok')
        }
        catch(e){
            console.log(e)
            return res.status(400).send({error: 'Erro ao atualizar blog'})
        }
    }

    async deleteById(req, res){
        try{
            const blog = await BlogService.findById(req.params.blogId)

            if(!blog)
                return res.status(400).send({error: 'Blog não encontrado'})
    
            await BlogService.deleteById(blog.id)
            res.send('ok')
        }
        catch(e){
            console.log(e)
            return res.status(400).send({error: 'Erro ao remover blog'})
        }

    }

    async deleteAll(req, res){
        try{
            await BlogService.deleteAll()
            res.send('ok')
        }
        catch(e){
            console.log(e)
            return res.status(400).send({error: 'Erro ao remover blogs'})
        }
    }
}

const blogController = new BlogController()

module.exports = blogController