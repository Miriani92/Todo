const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/todoRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());
const port = process.env.PORT;
app.use("/api/v1/todo", router);
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(port, () =>
      console.log(`server is running on port on port ${port}`)
    );
  } catch (error) {
    console.log(error.message);
  }
};

startServer();
