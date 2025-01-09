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
    connection.query("INSERT INTO `disciples` (`surname`, `givenName`, `middleName`, `status`, `birthdate`, `network`, `contactNo`, `address`) VALUES ('"+req.body.surname.toUpperCase()+"', '"+req.body.givenName.toUpperCase()+"', '"+req.body.middleName.toUpperCase()+"', '"+req.body.status+"', '"+req.body.birthdate+"', '"+req.body.network+"', '"+req.body.contactNo+"', '"+req.body.address.toUpperCase()+"')", function (err, response) {
        res.status(200).send(response);
    });
});