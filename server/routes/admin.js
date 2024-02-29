const router = require("express").Router()
const { homeAdmin } = require("../controller/admin")
router.get("/",homeAdmin)
module.exports = router