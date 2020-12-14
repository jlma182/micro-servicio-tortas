const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const rtortas = require("./routes/Rtortas");
const cors = require("cors");

require("./db");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/pasteleria", rtortas);

app.listen(3014, () => {
   console.log("run--->");
});
