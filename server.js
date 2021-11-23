const express = require('express');
const app = express();

app.use(express.static("templates"));

app.get('/', function (req, res) {})

app.listen(process.env.PORT || 4000)