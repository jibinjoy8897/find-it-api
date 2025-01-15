const express = require("express");
const app = express();
const cors = require("cors");

console.log("ENV CLIENT",process.env.FRONTEND_URL);
app.use(
  cors({
    origin: ["http://localhost:3001", process.env.FRONTEND_URL], // Set allowed origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Allow cookies
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello from our server! Hi");
});
