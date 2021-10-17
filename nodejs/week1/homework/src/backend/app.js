const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reviews = require("./data/reviews");
const reservations = require("./data/reservations");

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  res.send("asd");
});

// Response all meals and includes review it matching each meal
const renderingMeals = meals.map((item) => {
  item.reviews = reviews.filter((obj) => obj.mealId === item.id);
  return item;
});
app.get("/meals", function (req, res) {
  res.send(renderingMeals);
});
// Respond cheap meal with + reviews
const cheapMeals = meals.filter((item) => {
  item.reviews = reviews.filter((obj) => obj.mealId === item.id);
  return item.price < 70;
});
app.get("/cheap-meals", function (req, res) {
  res.send(cheapMeals);
});

module.exports = app;
app.listen(8080);
