const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const rcakes = require("./routes/Rcakes");
const cors = require("cors");

require("./db");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/bakery", rcakes);

app.listen(3014, () => {
   console.log("run--->");
});
