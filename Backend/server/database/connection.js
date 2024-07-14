const mongoose = require("mongoose");
const dotEnv = require("dotenv");
dotEnv.config();

const databaseUrl =
  process.env.DATABASE_URL || "mongodb://localhost/argentBankDB";
if (!databaseUrl) {
  throw new Error("DATABASE_URL is not defined in the environment variables.");
}
module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database successfully connected");
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`);
    throw new Error(error);
  }
};
