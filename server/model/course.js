const mongoose = require('mongoose')
const { Schema } = mongoose;

const courseSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  teacher: String,
  course_id: String,
  description: {
    type: String,
    default: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
  },
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  deleted:{
    type:Boolean,
    default: false
  },
  image: {
    type: String,
    default: 'https://printgo.vn/uploads/media/796109/unnamed_1631691234.jpg'
  }
},{
  timestamps:true
})
module.exports = mongoose.model("Course",courseSchema)