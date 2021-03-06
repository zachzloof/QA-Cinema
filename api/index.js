let express = require("express");
let bodyparser = require("body-parser");

let app = express();

// let user = "guest";

const itemRoutes = require('./routes/routes.js');

app.use(itemRoutes);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(function (req, res, next) { res.header("Access-Control-Allow-Origin", "*"); res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); next(); });


// app.get("/logout", function(req, res) {
//     user = "guest";
//     res.redirect("http://localhost:3000/");
//     res.end();
// })

// app.post("/processLogin", function (req, res) {

//     let pass = req.body.password;
//     db.query(`SELECT * FROM users WHERE username = '${req.body.username}'`, function (err, results) {
//         console.log(results)
//         if (results.length != 1) {
//             console.log(`username is wrong, please try again`);
//             res.redirect("http://localhost:3000/login/baduser");
//             res.end();
//         } else if (results[0].password == pass) {
//             user = req.body.username;
//             console.log(`${user} is logged in`);
//             res.redirect("http://localhost:3000/");
//             res.end();
//         } else {
//             console.log(`password is wrong, please try again`);
//             res.redirect("http://localhost:3000/login/badpass");
//             res.end();
//         }
//     });

// })

// app.post("/processBooking", function (req, res) {
//     let children = parseInt(req.body.children);
//     let students = parseInt(req.body.student);
//     let adults = parseInt(req.body.adult);
//     let movie = req.body.movie;
//     let time = req.body.time;
//     let date = req.body.date;
//     let screen = req.body.screen;
//     console.log(children);
//     console.log(students);
//     console.log(adults);
//     let price= ((adults * 17.99) + (students * 15.50) + (children * 13.55) * 1.2); //adding concession
//     db.query(`INSERT INTO payments (user, cost, children, students, adults, screen, date, movie, time, status) VALUES ("${user}", ${price}, ${children}, ${students}, ${adults}, "${screen}", "${date}", "${movie}", "${time}", "PENDING")`, function (err, results) {
//         console.log(results.insertId);
//         res.status(201).send({id: results.insertId});
       
//     });
// })

// app.post("/registerUser", function (req, res) {
//     let username = req.body.username;
//     let pass = req.body.password;
//     db.query(`INSERT INTO users (username, password) VALUES ("${username}", "${pass}")`, function (err, results) {
        
//     });
//     res.redirect("http://localhost:3000/login")
// })

// app.get("/getComments", function (req, res) { //TESTED
//     db.query(`SELECT * FROM comments`, function (err, results) {
//         res.status(200).send(results)
//     })
// });

// app.post("/search", function (req, res) {
//     let movie = req.body.input;
//     console.log(movie);
//     res.status(200).redirect(`http://localhost:3000/search/${movie}`).send()}
// );

// app.get("/getPrice/:x", function (req, res) { //TESTED
//     let id = req.params.x;
//     db.query(`SELECT * FROM payments WHERE id=${id}`, function (err, results) {
//         res.status(200).send(results)
//     })
    
// });

// app.get("/getTickets", function (req, res) { //TESTED
//     db.query(`SELECT * FROM payments where user = "${user}"`, function (err, results) {
//         res.status(200).send(results)
//     })
    
// });

// app.post("/processComment/:x", function (req, res) {
//     let x = req.params.x;
//     let body = req.body.comment1;
//     db.query(`INSERT INTO comments (user, likes, dislikes, post, mods, body) VALUES ("${user}", 0, 0, ${x}, "OK", "${body}")`, function (err, results) {

//     });
//     res.redirect("http://localhost:3000/discussionBoard")
   
// });

// app.post("/putStatus", function (req, res) {
//     let status = req.body.status;
//     console.log(status);
//     db.query(`UPDATE payments SET status="${status}" ORDER BY id DESC LIMIT 1`, function (err, results) {
        
//     });
//     res.status(200).send()
//     // res.redirect("http://localhost:3000/discussionBoard")
    
// });


// app.get("/newLike/:x/:y", function (req, res) {
//     let x = parseInt(req.params.x);
//     let y = parseInt(req.params.y);
//     db.query(`UPDATE comments SET likes=${x + 1} WHERE id = ${y}`, function (err, results) {
//     });
//     res.redirect("http://localhost:3000/discussionBoard")
// });

// app.get("/newDislike/:x/:y", function (req, res) {
//     let x = parseInt(req.params.x);
//     let y = parseInt(req.params.y);
//     db.query(`UPDATE comments SET dislikes= ${x + 1} WHERE id = ${y}`, function (err, results) {
//     });
//     res.redirect("http://localhost:3000/discussionBoard")
// });


app.listen(4005);

module.exports = app;