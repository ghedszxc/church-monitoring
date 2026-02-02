// const express = require("express");
// const app = express();
// const PORT = 3000;

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! nani!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
