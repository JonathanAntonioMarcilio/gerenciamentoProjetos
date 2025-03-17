const express = require("express");
const ProductController = require("../controllers/productController");
const ProjectController = require("../controllers/projectController");
const TaskController = require("../controllers/taskController")
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/userController", ProductController.post);
app.get("/userController", ProductController.get);
app.put("/userController", ProductController.put);
app.delete("/userController", ProductController.delete);

app.post("/projectController", ProjectController.post);
app.get("/projectController", ProjectController.get);
app.put("/projectController", ProjectController.put);
app.delete("/projectController", ProjectController.delete);

app.post("/taskController", TaskController.post);
app.get("/taskController", TaskController.get);
app.put("/taskController", TaskController.put);
app.delete("/taskController", TaskController.delete);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
