const {describe, it} = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");

const server = require('../index');
const { expect } = require("chai");
let mysql = require("mysql");

chai.use(chaiHttp);

let db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password",
        database: "qa-cinema-test"
    }
)

describe('1st test', () => {
    before(() => {
         db.query("DROP TABLE users", function(err, res){
        });
         db.query("CREATE TABLE IF NOT EXISTS users", function(err, res){
        });
         db.query("DROP TABLE payments", function(err, res){
        });
         db.query("CREATE TABLE IF NOT EXISTS payments", function(err, res){
        });
         db.query(`INSERT INTO users (username, password) VALUES ("guest", "password")`, function (err, results) {
        });
         db.query(`INSERT INTO users (user, cost, children, students, adults, screen, date, movie, time, status) VALUES ("guest", 100, 1, 1, 1, "deluxe", "01/01/2022", "batman", "19:00", "COMPLETED")`, function (err, results) {
        });

    })
    it('should get payments', () => {
        chai.request(server).get("/getTickets").end((err, res) => {
             expect(err).to.be.null;
             expect(res.status).to.equal(200)
             expect(res.body[0]).to.include({
                 id: 1,
                 user: "guest",
                 cost: 100,
                 children: 1,
                 students: 1,
                 adults: 1,
                 date: "01/01/2022",
                 movie: "batman",
                 time: "19:00",
                 status: "COMPLETED"
             })
        });
    })
})