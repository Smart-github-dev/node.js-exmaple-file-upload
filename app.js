const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

app.use(fileUpload());


app.use(express.static("public"));

app.post('/upload', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  let sampleFile = req.files.sampleFile;

  sampleFile.mv('uploads/' + sampleFile.name, (err) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.send('File uploaded!');
  });
});

app.listen(3005, () => {
  console.log('Server is running on port 3000');
});