const router = require("express").Router()
const {getAllCourse, addCourse, deleteCourse} = require("../controller/courses")
router.get("/",getAllCourse)
router.post("/add",addCourse)
router.delete("/delete",deleteCourse)
module.exports = router