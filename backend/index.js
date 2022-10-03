const express = require("express");
require("dotenv").config();
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const cors = require("cors")
// @PORT
const PORT = process.env.PORT || 5080;

// inbuilt middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

// custom middleware
app.get("/", (req, res)=>{
    res.send('Emmanuel is a genius')
})
app.get("/api", (req, res)=> {
    res.send("Hello, i'm an api")
})
app.use('/api/posts', require('./routes/postRoutes'))

app.listen(PORT, (req, res, next) => {
  console.log(`Listening on port http://localhost:${PORT}`);
});