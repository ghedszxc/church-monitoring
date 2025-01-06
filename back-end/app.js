const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = 5000;

app.use(morgan('combined'))
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
const router = express.Router();
const connection = require('./db_connection/index.js');

app.use(express.json());

app.get('/disciples', (req, res) => {
    connection.query('SELECT * FROM `disciples`', function (err, response) {
        res.status(200).send(response);
    });
});


// /* GET home page. */
// // router.get('/', function(req, res, next) {
// //   // res.render('layout', { title: 'Movieseat' });

// //   connection.connect();

// //     connection.query('SELECT * FROM `users` WHERE `first_name` = "Kees"', function (error, results, fields) {
// //       // error will be an Error if one occurred during the query
// //       // results will contain the results of the query
// //       // fields will contain information about the returned results fields (if any)
// //       console.log(results);
// //     });

// //   connection.end();
// // });

// // module.exports = router;


// // app.get('/', (req, res)=>{
// //     res.status(200);
// //     res.send("Welcome to root URL of Server");
// // });

// // app.use(express.json());
// // app.post('/', (req, res)=>{
// //     const {name} = req.body;
    
// //     res.send(`Welcome ${name}`);
// // })
