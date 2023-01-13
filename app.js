const express = require("express");
const app = express();
// mongoose here!
const connectDB = require("./db/connect");
//Import Routes here!
const tasks = require("./routes/task");
require("dotenv").config();
// middleware here
app.use(express.json());

//Using routes
app.get("/", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

// app.get("/api/v1/tasks");            -get all task
// app.post("/api/v1/tasks");           -create a new task
// app.get("/api/v1/tasks/:id");        -get single task
// app.patch("/api/v1/tasks/:id");      -update task
// app.delete("/api/v1/tasks/:id");     -delete task

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log("server is runing 3000");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
