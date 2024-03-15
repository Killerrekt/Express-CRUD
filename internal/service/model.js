const mongoose = require("mongoose")
const blogSchema = new mongoose.Schema(
    {
        _id: {
            type : String,
            required : true,
        },
        title: {
            type : String,
            unique : true,
            required : true,
        },
        content: {
            type : String,
            required : true,
        }
    },
    {
        timestamps: true,
    }
)

const Blog = mongoose.model("Blogs",blogSchema)
module.exports = Blog