const mongoose = require("mongoose");
const URI =
  "mongodb://cluster0-shard-00-00-q3nd7.mongodb.net:27017,cluster0-shard-00-01-q3nd7.mongodb.net:27017,cluster0-shard-00-02-q3nd7.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";

const connectMongo = async () => {
  await mongoose.connect(URI, {
    dbName: "student_db",
    user: "donnukrit",
    pass: "3P4iFHAmdv2EFdRs",
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Mongo Atlas has been connected !");
};

module.exports = connectMongo;
