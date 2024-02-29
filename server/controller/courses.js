const courses = require("../model/course")
const asyncHandler = require("express-async-handler")
const getAllCourse = asyncHandler(async(req, res) => {
  const rs = await courses.find().select("-createdAt -date -updatedAt -__v")
  return res.status(200).json({
    mess: "Get all courses successfully",
    response: rs
  })
})
const addCourse = asyncHandler(async(req, res) => {
  const rs = await courses.create(req.body)
  return res.status(200).json({
    mess: 'Created successfully',
    response: rs
  })
})
const deleteCourse = asyncHandler(async(req, res) => {
  const {_id} = req.query
  if (!_id) throw new Error("Missing inputs");
  const rs = await courses.findByIdAndDelete(_id)
  return res.status(200).json({
    mess: 'Created successfully',
    response: _id
  })
})
module.exports = {
  getAllCourse,
  addCourse,
  deleteCourse
}