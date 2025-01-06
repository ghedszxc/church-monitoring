const express = require('express');

const app = express();
const PORT = 5000;

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);


// const express = require('express');
const router = express.Router();
const connection = require('./db_connection/index.js');



app.get('/disciple', (req, res)=>{
    // res.set('Content-Type', 'text/html');
    // res.status(200).send("<h1>Hello there!</h1>");

  connection.connect();

    connection.query('SELECT * FROM `disciples`', function (error, results, fields) {
      // error will be an Error if one occurred during the query
      // results will contain the results of the query
      // fields will contain information about the returned results fields (if any)
      console.log('results: ', results[0]);
    });

  connection.end();
});


/* GET home page. */
// router.get('/', function(req, res, next) {
//   // res.render('layout', { title: 'Movieseat' });

//   connection.connect();

//     connection.query('SELECT * FROM `users` WHERE `first_name` = "Kees"', function (error, results, fields) {
//       // error will be an Error if one occurred during the query
//       // results will contain the results of the query
//       // fields will contain information about the returned results fields (if any)
//       console.log(results);
//     });

//   connection.end();
// });

// module.exports = router;

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'bocaue_masterlist'
// })

// connection.connect()

// connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

// connection.end()



// app.get('/', (req, res)=>{
//     res.status(200);
//     res.send("Welcome to root URL of Server");
// });

// app.use(express.json());
// app.post('/', (req, res)=>{
//     const {name} = req.body;
    
//     res.send(`Welcome ${name}`);
// })
