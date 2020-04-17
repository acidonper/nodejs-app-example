const hbs = require("hbs");
const Express = require("express");
const app = Express();

const bodyParser = require("body-parser");

app.use(Express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", require("./routes/index.js"));

app.use((req, res) => {
    const error_data = { message: "", code: "", navbar: true };
    error_data.code = 404;
    error_data.message = "route not found";
    res.render("error", error_data);
});

const SERVER_PORT = process.env.SERVER_PORT || 5000;

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT} `);
});

module.exports = app;
