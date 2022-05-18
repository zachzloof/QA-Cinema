const { describe, it } = require("mocha");
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
        database: "qa-cinema-test",
        multipleStatements: true
    }
)

describe('QA-cinema tests', () => {
    before((done) => {
        db.query(`
         DROP TABLE IF EXISTS comments; 
         DROP TABLE IF EXISTS payments; 
         DROP TABLE IF EXISTS users; 
         CREATE TABLE IF NOT EXISTS users(
            username VARCHAR(55) UNIQUE NOT NULL,
            password VARCHAR(55) NOT NULL,
            PRIMARY KEY(username)
            ); 
         
         CREATE TABLE IF NOT EXISTS payments(
            id INT NOT NULL AUTO_INCREMENT,
            user VARCHAR(55) NOT NULL,
            cost INT NOT NULL,
            children INT NOT NULL,
            students INT NOT NULL,
            adults INT NOT NULL,
            screen VARCHAR(20) NOT NULL,
            date VARCHAR(55) NOT NULL,
            movie VARCHAR(100) NOT NULL,
            time VARCHAR(55) NOT NULL,
            status VARCHAR(55) NOT NULL,
            PRIMARY KEY(id),
            FOREIGN KEY(user) REFERENCES users (username) ON DELETE CASCADE
            );

            CREATE TABLE IF NOT EXISTS comments (
                id INT NOT NULL AUTO_INCREMENT,
                user VARCHAR(55) NOT NULL,
                likes INTEGER NOT NULL,
                dislikes INTEGER NOT NULL,
                post INTEGER NOT NULL,
                mods VARCHAR(55) NOT NULL,
                body VARCHAR(200) NOT NULL,
                PRIMARY KEY(id),
                FOREIGN KEY(user) REFERENCES users (username) ON DELETE CASCADE
                );
          INSERT INTO users (username, password) VALUES ("guest", "password"); 
         INSERT INTO payments (user, cost, children, students, adults, screen, date, movie, time, status) VALUES ("guest", 100, 1, 1, 1, "deluxe", "01/01/2022", "batman", "19:00", "COMPLETED");
         INSERT INTO comments (user, likes, dislikes, post, mods, body) VALUES ("guest", 1, 1, 1, "none", "blah blah testing 123");
         `, function (err, res) {
            console.log(err);
            return done();
        });

    })

    
    it('should get payments', (done) => {
        chai.request(server).get("/getTickets").end((err, res) => {
            expect(err).to.be.null;
            expect(res.status).to.equal(200);
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
            return done();
        });

    })



    it('should get price by id', (done) => {
        chai.request(server).get("/getPrice/1").end((err, res) => {
            expect(err).to.be.null;
            expect(res.status).to.equal(200);
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
            return done();
        });
    })

    
    it('should get comments', (done) => {
        chai.request(server).get("/getComments").end((err, res) => {
            expect(err).to.be.null;
            expect(res.status).to.equal(200);
            expect(res.body[0]).to.include({
                id: 1,
                user: "guest",
                likes: 1,
                dislikes: 1,
                post: 1,
                mods: "none",
                body: "blah blah testing 123"
            })
            return done();
        });
    })
})
it('logout test', (done) => {
    chai.request(server).get("/logout").end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(200);
        return done();
    });

})


    it('should update status', (done) => {
        chai.request(server).post("/putStatus").send({
            status: "TESTING"
        }).end((err, res) => {
            expect(err).to.be.null;
            expect(res.status).to.equal(201);
            
            return done ();
        });

    })

   

    it('registration post test', (done) => {
        chai.request(server).post("/registerUser").send({
            username: "zach",
            password: "password"
        }).end((err, res) => {
            expect(err).to.be.null;
            expect(res.status).to.equal(201);
            return done();
        });

    })

    it('search test', (done) => {
        chai.request(server).post("/search").send({
            input: "batman",
        }).end((err, res) => {
            expect(err).to.be.null;
            expect(res.status).to.equal(201);
            return done();
        });

    })


    it('process comment test', (done) => {
        chai.request(server).post("/processComment/1").send({
                    user: "zach",
                    likes: 1,
                    dislikes: 1,
                    post: 1,
                    mods: "none",
                    body: "blah blah testing 1234"
        }).end((err, res) => {
            expect(err).to.be.null;
            expect(res.status).to.equal(201);
            return done();
        });
    
    })

    it('like test', (done) => {
        chai.request(server).get("/newLike/:1/:2").end((err, res) => {
            expect(err).to.be.null;
            expect(res.status).to.equal(200);
            return done();
        });
    
    })

    it('dislike test', (done) => {
        chai.request(server).get("/newDislike/:1/:2").end((err, res) => {
            expect(err).to.be.null;
            expect(res.status).to.equal(200);
            return done();
        });
    
    })



    // it('validate login', (done) => {
    //     chai.request(server).post("/processLogin").send({
    //         username: "guest",
    //         password: "password"
    //     }).end((err, res) => {
    //         expect(err).to.be.null;
    //         expect(res.status).to.equal(201);
    //         return done();
    //     });

    // })

    // it('post new booking', (done) => {
    //     chai.request(server).post("/processLogin").send({
    //         user: "guest",
    //         cost: 125,
    //         children: 2,
    //         students: 3,
    //         adults: 2,
    //         screen: "standard",
    //         date: "01/01/2022",
    //         movie: "batman2",
    //         time: "18:00",
    //         status: "pending"
    //     }).end((err, res) => {
    //         expect(err).to.be.null;
    //         expect(res.status).to.equal(201);
    //         // expect(res.body).to.include({
    //         //     id: 2
    //         // });
    //         return done();
    //     });
       
    // })