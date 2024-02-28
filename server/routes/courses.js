const router = require("express").Router()
const {getAllCourse, addCourse} = require("../controller/courses")
router.get("/",getAllCourse)
router.post("/add",addCourse)
module.exports = router