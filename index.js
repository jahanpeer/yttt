const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname + '/files')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/files/index.html'));
});

app.get('*', function (req, res) {
  const url = req.originalUrl;
  res.redirect("https://www.youtube.com/watch?v=" + url.substring(1));
});

app.listen(PORT, (error) => {
  if(!error)
    console.log("Server running, app listening on port", PORT)
  else
    console.log("Error:", error);
});