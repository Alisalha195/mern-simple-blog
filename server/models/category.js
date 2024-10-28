
import mongoose from "mongoose";
 
const CategorySchema = new mongoose.Schema({     
  title: {
    type: String,
    required: true
  },

  authorId : {
    type: String,
     required: true
  },
 
  
  date: { type: Date, default: Date.now },
});
 
const Category = mongoose.model("Category", CategorySchema);
export default Category;