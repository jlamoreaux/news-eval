const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const aylien = require('aylien_textapi');
const router = require('./index');
// const mainController = require("./controllers/mainController");
// const path = require('path');
const cors = require('cors');

const app = express();


app.use(express.static("dist"));

router.use("/", (req, res, next) => {
  next();
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);



// router.get("/", (req, res) => {
//   res.sendFile("../dist/index.html", { root: __dirname });
// });

// router.get("/test", mainController.getAylien);




const port = process.env.PORT;
app.listen(port, console.log(`Listening on port ${port}`))

