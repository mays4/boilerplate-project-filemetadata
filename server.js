var express = require('express');
var cors = require('cors');
require('dotenv').config();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});
app.post('/api/fileanalyse', upload.single('upfile'), function (req, res) {
  // req.file is the name of your file in the form above, here 'uploaded_file'
  // req.body will hold the text fields, if there were any
 //res.json{"name":name,"type":type,"size":size}


 let name = req.file.originalname;
 let type = req.file.mimetype;
 let size = req.file.size;
 res.json({"name":name,"type":type,"size":size})
});



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
