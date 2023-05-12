const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// root
app.get("/", (req, res) => {
  res.send("coffe making server is running");
});

app.listen(port, () => {
  console.log(`COFFEEE SERVER IS RUNNING ON PORT ${port}`);
});