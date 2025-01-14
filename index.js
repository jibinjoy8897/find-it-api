const express = require("express");
const app = express();
const cors = require("cors");
// console.log("app>>", app);

app.use(cors());

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello from our server!");
});
