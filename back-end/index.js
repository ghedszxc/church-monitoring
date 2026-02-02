require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Routes
const disciple = require("./src/routes/disciple");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/disciples", disciple);

// app.get("/", (req, res) => {
//   res.send("Hello World!!!! :DDDD");
// });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
