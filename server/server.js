const express = require('express')
const init = require('./routes/index')
const dbConnect = require('./config/dbconnect')
const cors = require("cors")
const exphbs = require('handlebars');
const { engine } = require('express-handlebars');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL
}));
app.use(express.urlencoded({extended : true}));
dbConnect()
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
exphbs.registerHelper('incrementIndex', function(index) {
  return index + 1;
});
init(app)


const PORT = process.env.PORT || 5000



app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
})


