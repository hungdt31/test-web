const courseRouter = require("./courses")
const midd = require("../middleware/errorHandler")

const initilize = (app) => {
  app.use("/api/courses", courseRouter)
  app.use(midd.notFound)
  app.use(midd.errHandler)
}
module.exports = initilize