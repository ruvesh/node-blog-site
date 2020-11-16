const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: { type: String, required: true },
  snippet: { type: String, required: true },
  body: { type: String, required: true }
}, { timestamps: true});

/**
 * Creating a Model for Blog
 * name of the model in the first param is important
 * mongoose takes the name and pluralizes it and searches for the collection 
 * so it will take Blog and search for blogs automatically and we never have to specify the actual name of the collection
 */
const Blog = mongoose.model('Blog', blogSchema)

module.exports =  Blog
