require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const helmet = require('helmet')
const morgan = require('morgan')
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const port = process.env.PORT || 5000
const db_url = process.env.DB_URL

mongoose.Promise = global.Promise;
mongoose.connect(db_url, 
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);


app.use(helmet());
app.use(morgan('combined'))
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('./routes/userRoute'))

if(process.env.NODE_ENV==="production"){
 
	app.use(express.static("frontend/build/"))

 }
 app.use(express.static("frontend/build/"))
// const publicPath = path.join(__dirname, '..', 'public');
// app.use(express.static(publicPath));
// app.get('/', (req, res) => {
//   console.log(publicPath);
//    res.sendFile(path.join(publicPath, 'index.html'));
// });


app.listen(port, function(){
  console.log('Server is running on Port:',port);
});


module.exports = app