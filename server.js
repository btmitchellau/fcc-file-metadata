'use strict';

const express = require('express');
const cors = require('cors');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const fs = require('fs');

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.post('/api/fileanalyse', upload.single('upfile'), function (req,res) {
    res.json({"filesize" : req.file.size})
});

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
