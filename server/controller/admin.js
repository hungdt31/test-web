const asyncHandler = require("express-async-handler");
const {multipleMongooseToObject, mongooseToObject} = require('../utils/hbs')
const courses = require("../model/course");
const homeAdmin = asyncHandler(async (req, res) => {
  const rs = multipleMongooseToObject(await courses.find({deleted: false}));
  res.render("home", { rs });
});
module.exports = {
  homeAdmin,
};
