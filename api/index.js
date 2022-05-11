let express = require("express");
let bodyparser = require("body-parser");
let mysql = require("mysql");
let app = express();
let user = "guest";

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(function (req, res, next) { res.header("Access-Control-Allow-Origin", "*"); res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); next(); });

let db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password",
        database: "qa-cinema"
    }
)

db.connect();

app.post("/processLogin", function (req, res) {

    let pass = req.body.password;
    db.query(`SELECT * FROM users WHERE username = '${req.body.username}'`, function (err, results) {
        console.log(results)
        if (results.length != 1) {
            console.log(`username is wrong, please try again`);
            res.redirect("http://localhost:3000/login/baduser");
            res.end()
        } else if (results[0].password == pass) {
            user = req.body.username;
            console.log(`${user} is logged in`);
            res.redirect("http://localhost:3000/");
            res.end()
        } else {
            console.log(`password is wrong, please try again`);
            res.redirect("http://localhost:3000/login/badpass");
            res.end()
        }
    });

})

app.post("/registerUser", function (req, res) {
    let username = req.body.username;
    let pass = req.body.password;
    db.query(`INSERT INTO users (username, password) VALUES ("${username}", "${pass}")`, function (err, results) {

    });
    res.redirect("http://localhost:3000/login")
    res.end()
})

app.get("/getComments", function (req, res) {
    db.query(`SELECT * FROM comments`, function (err, results) {
        res.send(results)
    })
});

app.post("/processComment/:x", function (req, res) {
    let x = req.params.x;
    let body = req.body.comment1;
    db.query(`INSERT INTO comments (user, likes, dislikes, post, mods, body) VALUES ("${user}", 0, 0, ${x}, "OK", "${body}")`, function (err, results) {

    });
    res.redirect("http://localhost:3000/discussionBoard")
    res.end()
});


app.get("/newLike/:x/:y", function (req, res) {
    let x = parseInt(req.params.x);
    let y = parseInt(req.params.y);
    db.query(`UPDATE comments SET likes=${x + 1} WHERE id = ${y}`, function (err, results) {
    });
    res.redirect("http://localhost:3000/discussionBoard")
    res.end()
});

app.get("/newDislike/:x/:y", function (req, res) {
    let x = parseInt(req.params.x);
    let y = parseInt(req.params.y);
    db.query(`UPDATE comments SET dislikes= ${x + 1} WHERE id = ${y}`, function (err, results) {
    });
    res.redirect("http://localhost:3000/discussionBoard")
    res.end()
});

app.listen(4005);