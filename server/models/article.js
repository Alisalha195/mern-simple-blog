
import mongoose from "mongoose";
 
const ArticleSchema = new mongoose.Schema({     
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: false,
    default : "Default Content"
  },
  author: {
    type : String,
    required: true,
    default : "Global Author"
  },
  authorId: {
    type : String,
    required: true
  },
  pending : {
    type : Boolean,
    required: true,
    default: true
  },
  approved: {
    type: Boolean,
    required: true,
    default: false
  },
  likes : {
    type: Number,
    default: 0
  },
  dislikes: {
    type: Number,
    default: 0
  },
  date: { type: Date, default: Date.now },
});
 
const Article = mongoose.model("Article", ArticleSchema);
export default Article;