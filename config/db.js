const { ServerApiVersion } = require('mongodb');
const mongoose = require("mongoose");


const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1
  });

  console.log(
    `MongoDB холбогдлоо : ${conn.connection.host}`
  );
};

module.exports = connectDB;
