const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(express.json());
app.use(cors());

 app.use(express.static('public'));
app.get("/", (req, res) => {
  res.status(200).json({ msg: "welcome to Json data app" });
});

app.post("/submit", (req, res) => {
  try {
    const jsonData = JSON.parse(req.body.jsonData);
    res.json(jsonData);
  } catch (error) {
    res.status(400).json({ error: "Invalid JSON data" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
