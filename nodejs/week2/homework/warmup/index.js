// Add 2 routes to your index.js:
// GET /numbers/add?first=<number here>&second=<number here>. In response send sum (first + second).
// GET /numbers/multiply/<first number here>/<second number here>. in response send multiplication (first * second).
// Example: going to localhost:3000/numbers/add?first=3&second=7 should respond with 10

const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("nodejs week2 homework"));
app.get("/numbers/add", (req, res) => {
    const firstNum = parseInt(req.query.firstNum);
    const secondNum = parseInt(req.query.secondNum);
    res.send(`Sum of ${firstNum+secondNum}`);
});
app.get("/numbers/multiply", (req, res) => {
    const firstNum = parseInt(req.query.firstNum);
    const secondNum = parseInt(req.query.secondNum);
    res.send(`multiply of ${firstNum * secondNum}`);
});
//console.log(9*2);
app.listen(3000, () => console.log(`Calculator on port 3000`));
module.exports = app;
