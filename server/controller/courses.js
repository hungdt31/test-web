const courses = require("../model/course")
const asyncHandler = require("express-async-handler")
const getAllCourse = asyncHandler(async(req, res) => {
  const rs = await courses.find()
  return res.status(200).json({
    mess: 'Got all course',
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
module.exports = {
  getAllCourse,
  addCourse
}