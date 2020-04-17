// Import the dependencies for testing
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Welcome", () => {
    describe("GET /", () => {
        it("should get welcome page", done => {
            chai.request(app)
                .get("/")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    done();
                });
        });
    });
});
