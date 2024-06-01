
import mongoose from "mongoose";
 
const ArticleSchema = new mongoose.Schema({     
  title: {
    type: String,
    required: true
  },
 
  
  date: { type: Date, default: Date.now },
});
 
const Article = mongoose.model("Article", ArticleSchema);
export default Article;