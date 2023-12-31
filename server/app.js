require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");

const DB =
  "mongodb+srv://abhishek10ghosh:abhishekghosh@cluster0.jcgg9tc.mongodb.net/mernstack?retryWrites=true&w=majority";

const port = 8003;

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`server is started on port numbber ${port}`);
});
