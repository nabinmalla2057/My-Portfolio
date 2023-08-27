const express = require("express");
const router = require("./route/index");
const app = express();
const port = 3000; // You can change this to the desired port number

app.get("/", router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
