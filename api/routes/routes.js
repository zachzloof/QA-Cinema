const router = require('express').Router();
let user = "guest"
const db = require("../db");
let bodyparser = require("body-parser");

router.use(bodyparser.json());
router.use(bodyparser.urlencoded({ extended: true }));
router.use(function (req, res, next) { req.header("Access-Control-Allow-Origin", "*"); req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); res.header("Access-Control-Allow-Origin", "*"); res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); next(); });

router.get("/logout", function(req, res) { //tested
    user = "guest";
    res.status(302).redirect("http://localhost:3000/");
})

router.post("/processLogin", function (req, res) { //TESTED

    let pass = req.body.password;
    
    db.query(`SELECT * FROM users WHERE username = '${req.body.username}'`, function (err, results) {
        console.log(results)
        if (results.length != 1) {
            console.log(`username is wrong, please try again`);
            res.status(302).redirect("http://localhost:3000/login/baduser")
        } else if (results[0].password == pass) {
            user = req.body.username;
            console.log(`${user} is logged in`);
            res.status(302).redirect("http://localhost:3000/");
        } else {
            console.log(`password is wrong, please try again`);
            res.status(302).redirect("http://localhost:3000/login/baduser")
        }
    });

})

router.post("/processBooking", function (req, res) { //TESTED
    let children = parseInt(req.body.children);
    let students = parseInt(req.body.student);
    let adults = parseInt(req.body.adult);
    let movie = req.body.movie;
    let time = req.body.time;
    let date = req.body.date;
    let screen = req.body.screen;
    console.log(children);
    console.log(students);
    console.log(adults);
    let price= ((adults * 17.99) + (students * 15.50) + (children * 13.55) * 1.2); //adding concession
    db.query(`INSERT INTO payments (user, cost, children, students, adults, screen, date, movie, time, status) VALUES ("${user}", ${price}, ${children}, ${students}, ${adults}, "${screen}", "${date}", "${movie}", "${time}", "PENDING")`, function (err, results) {
        console.log(results);
        res.status(201).send({id: results.insertId});
       
    });
    
})

router.post("/registerUser", function (req, res) { //TESTED
    let username = req.body.username;
    let pass = req.body.password;
    db.query(`INSERT INTO users (username, password) VALUES ("${username}", "${pass}")`, function (err, results) {
        
    });
    res.status(301).redirect("http://localhost:3000/login")
})

router.get("/getComments", function (req, res) { //TESTED
    db.query(`SELECT * FROM comments`, function (err, results) {
        res.status(200).send(results)
    })
});//

router.post("/search", function (req, res) { //TESTED
    let movie = req.body.input;
    console.log(movie);
    res.status(302).redirect(`http://localhost:3000/search/${movie}`)}
);

router.get("/getPrice/:x", function (req, res) { //TESTED
    let id = req.params.x;
    db.query(`SELECT * FROM payments WHERE id=${id}`, function (err, results) {
        res.status(200).send(results)
    })
    
});
router.get("/getTickets", function (req, res) { //TESTED
    db.query(`SELECT * FROM payments where user = "${user}"`, function (err, results) {
        res.status(200).send(results)
    })
    
});
router.post("/processComment/:x", function (req, res) { //TESTED
    let x = req.params.x;
    let body = req.body.comment1;
    db.query(`INSERT INTO comments (user, likes, dislikes, post, mods, body) VALUES ("${user}", 0, 0, ${x}, "OK", "${body}")`, function (err, results) {

    });
    res.status(302).redirect("http://localhost:3000/discussionBoard")
   
});
router.post("/putStatus", function (req, res) { //TESTED
    let status = req.body.status;
    console.log(status);
    db.query(`UPDATE payments SET status="${status}" ORDER BY id DESC LIMIT 1`, function (err, results) {
        
    });
    res.status(201).send()
    
    
});

router.get("/newLike/:x/:y", function (req, res) { 
    let x = parseInt(req.params.x);
    let y = parseInt(req.params.y);
    db.query(`UPDATE comments SET likes=${x + 1} WHERE id = ${y}`, function (err, results) {
    });
    res.status(302).redirect("http://localhost:3000/discussionBoard")
});

router.get("/newDislike/:x/:y", function (req, res) {
    let x = parseInt(req.params.x);
    let y = parseInt(req.params.y);
    db.query(`UPDATE comments SET dislikes= ${x + 1} WHERE id = ${y}`, function (err, results) {
    });
    res.status(302).redirect("http://localhost:3000/discussionBoard")
});

module.exports = router;