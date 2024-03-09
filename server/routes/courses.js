const router = require("express").Router()
const {getAllCourse, addCourse, deleteCourse, updateCourse} = require("../controller/courses")
router.get("/",getAllCourse)
router.post("/add",addCourse)
router.delete("/delete",deleteCourse)
router.put("/update", updateCourse)
module.exports = router