const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/db");
const indexRouter = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api", indexRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

