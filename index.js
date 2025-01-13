const express = require("express");
const app = express();
const cors = require("cors");
// console.log("app>>", app);

app.use(cors());

app.listen('https://find-it-dj5lrl1kg-jibin-joys-projects-4e286f1b.vercel.app/', () => {
  console.log("server listening on port 8080");
});

app.get("/", (req, res) => {
  res.send("Hello from our server!");
});
