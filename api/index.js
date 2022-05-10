let express= require("express");
let bodyparser=require("body-parser");
let mysql = require("mysql");
let app=express();
let user;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(function(req, res, next) { res.header("Access-Control-Allow-Origin", "*"); res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); next(); });

let db = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"password",
        database:"qa-cinema"
    }
)

db.connect();

app.post("/processLogin", function(req, res) {
    
    let pass = req.body.password;
    db.query(`SELECT * FROM users WHERE username = '${req.body.username}'`, function(err, results) {
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

app.post("/registerUser", function(req, res) {
    let username = req.body.username;
    let pass = req.body.password;
    db.query(`INSERT INTO users (username, password) VALUES ("${username}", "${pass}")`, function(err, results) {
    
    });
    res.redirect("http://localhost:3000/login")
    res.end()
})

app.get("/getComments", function(req, res) {
    db.query(`SELECT * FROM comments`, function(err, results) {
        res.send(results)
})});

app.listen(4005);