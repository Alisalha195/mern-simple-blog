
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
  date: { type: Date, default: Date.now },
});
 
const Article = mongoose.model("Article", ArticleSchema);
export default Article;