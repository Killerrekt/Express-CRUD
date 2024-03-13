const mongoose = require("mongoose")
const blogSchema = new mongoose.Schema(
    {
        id: {
            Type : Number,
            require : true,
        },
        title: {
            Type : String,
            unique : true,
            require : true,
        },
        content: {
            Type : String,
            require : true,
        }
    },
    {
        timestamps: true,
    }
)

const Blog = mongoose.Model(blogSchema)
module.exports = Blog