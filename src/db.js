const mongoose = require("mongoose");
const mongoUri = "mongodb://mongo:27017/my-test";

module.exports = () =>{
  return mongoose.connect(mongoUri);
};
