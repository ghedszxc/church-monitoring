const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = 5000;

app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors())

app.listen(PORT, (error) => {   
    console.log(!error ? `Server is Successfully Running, and App is listening on port: ${PORT}` : `Error occurred, server can't start: ${error}`)
});

// app.get('/disciples', (req, res) => {
//     res.send({
//         msg: 'hello'
//     })
// })


// const express = require('express');
// const router = express.Router();
const connection = require('./db_connection/index.js');

app.use(express.json());

app.get('/disciples', (req, res) => {
    connection.query('SELECT * FROM `disciples`', function (err, response) {
        res.status(200).send(response);
    });
});


app.post('/register', (req, res) => {
    res.send(req.body)
    // console.log(req.body);
    // response = {  
    //     first_name:req.body.first_name,  
    //     last_name:req.body.last_name  
    // };  
    // console.log(response);  
    // res.send(JSON.stringify(response));  
    // connection.query('INSERT INTO `disciples`(`surname`, `givenName`, `middleName`, `status`, `birthdate`, `network`, `contactNo`, `address`) VALUES', function (err, response) {
    //     res.status(200).send(response);
    // });
});