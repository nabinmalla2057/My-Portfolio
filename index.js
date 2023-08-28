const express = require("express");
const router = require("./route/index");
const app = express();
const port = 3000; // You can change this to the desired port number

app.use("/", router);
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
