const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("nodejs week3 homework"));

//Let's again create a calculator. This time the calculator will support 4 features(+ - / *)
//All the numbers that should be inputted should be gotten from the query parameters: calculator?firstParam=1&secondParam=2...

app.get("/add", async (req, res) => {
  const params = req.query;
  const values = Object.values(params).flat();
  const add = values.reduce(
    (firstParam, secondParam) => firstParam + secondParam
  );
  res.send(`${add}`);
  if (!add) {
    res.status(400).send("Params must be numbers");
  } else console.log(Subtraction);
  res.json(Subtraction);
});

app.get("/Subtraction", (req, res) => {
  const params = req.query;
  const values = Object.values(params).flat();
  const Subtraction = values.reduce(
    (firstParam, secondParam) => firstParam / secondParam
  );
  res.send(`${Subtraction}`);
  if (!Subtraction) {
    res.status(400).send("Params must be numbers");
  } else console.log(Subtraction);
  res.json(Subtraction);
});
app.post("/Division", async (req, res) => {
  const params = req.query;
  const values = Object.values(params).flat();
  const Division = values.reduce(
    (firstParam, secondParam) => firstParam / secondParam
  );
  res.send(`${Division}`);
  if (!Division) {
    res.status(400).send("Params must be numbers");
  } else console.log(Division);
  res.json(Division);
});
app.post("/multiply", async (req, res) => {
  const params = req.query;
  const values = Object.values(params).flat();
  const multiply = values.reduce(
    (firstParam, secondParam) => firstParam * secondParam
  );
  res.send(`${multiply}`);
  if (!multiply) {
    res.status(400).send("Params must be numbers");
  } else console.log(multiply);
  res.json(multiply);
});

app.listen(3000, () => console.log(`Calculator listening on port 3000`));
module.exports = app;
