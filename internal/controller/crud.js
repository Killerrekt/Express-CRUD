const Blog = require("../service/model")

const BlogController = {
    GetBlog : async (req,res) => {
        try{
            const blogs = await Blog.find({}) 
            res.status(200).json({message : "The data has been retrived", data : blogs})
        }catch(err){
            res.status(500).json({message : "something went wrong",error : err})
        }
    },
    CreateBlog : async(req,res) => {
        try{
            const {_id, title, content} = req.body
            if (!_id){
                return res.status(403).json({message : "The id field is missing"})
            }
            if(!title){
                return res.status(403).json({message : "The title field is missing"})
            }
            if(!content){
                return res.status(403).json({message : "The content field is missing"})
            }
            const newBlog = new Blog({_id,title,content})
            await newBlog.save()
            return res.status(201).json({message : "The blog entry have been created"})
        }catch(err){
            return res.status(500).json({message : "something went wrong", error : err})
        }
    },
    UpdateBlog : async (req,res) => {
        try{
            const {id, title, content} = req.body
            if (!id){
                return res.status(403).json({message : "The id field is missing"})
            }
            if(!title){
                return res.status(403).json({message : "The title field is missing"})
            }
            if(!content){
                return res.status(403).json({message : "The content field is missing"})
            }
            const UpdateBlog = await Blog.findOne({id})
            if (!UpdateBlog){
                return res.status(404).json({message : "the blog doesn't exists"})
            }
            UpdateBlog.title = title
            UpdateBlog.content = content
            await UpdateBlog.save()
            return res.status(201).json({message : "The blog entry have been updated"})
        }catch(err){
            return res.status(500).json({message : "something went wrong", error : err})
        }
    },
    DeleteBlog : async (req,res) => {
        try{
            const {id} = req.body
            if (!id){
                return res.status(403).json({message : "the id field was not passed"})
            }
            const DeleteBlog = await Blog.findOne({id})
            if (!DeleteBlog){
                return res.status(404).json({message : "the blog doesn't exists"})
            }
            await DeleteBlog.deleteOne()
            return res.status(200).json({message : "the blog has been deleted"})
        }catch(err){
            return res.status(500).json({message : "something went wrong", error : err})
        }
    }
} 

module.exports = BlogController