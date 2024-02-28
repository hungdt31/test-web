const express = require('express')
const init = require('./routes/index')
const dbConnect = require('./config/dbconnect')
const asyncHandler = require('express-async-handler')
const cors = require("cors")
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(cors({
  origin: process.env.CLIENT_URL
}))
app.use(express.urlencoded({extended : true}))
dbConnect()
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
})
init(app)

