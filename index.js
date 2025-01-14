const express = require("express");
const app = express();
const cors = require("cors");
// console.log("app>>", app);

app.use(cors());

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PATCH');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	res.header('Access-Control-Allow-Credentials', 'true');
	if (req.method === 'OPTIONS') {
	  return res.sendStatus(200); // Handle preflight requests correctly
	}
	next();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello from our server!");
});
