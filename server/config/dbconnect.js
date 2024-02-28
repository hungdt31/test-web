const { default: mongoose} = require("mongoose")

const dbConnect = async() => {
  try{
    const conn = await mongoose.connect(process.env.MONGODB_URL)
    if (conn.connection.readyState == 1) console.log("DB connection is successfull")
    else console.log("DB is connecting")
  } catch(error){
    console.log("DB connection is failed", error.reason);
  }
}
module.exports = dbConnect