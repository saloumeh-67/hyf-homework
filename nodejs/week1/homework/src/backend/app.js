const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reviews = require("./data/reviews");
const reservations = require("./data/reservations");

// this is where you will be adding your routes
app.get("/", async (req, res) => {
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
// Respond cheap meal + reviews
const cheapMeals = meals.filter((item) => {
  item.reviews = reviews.filter((obj) => obj.mealId === item.id);
  return item.price < 70;
  
});
app.get("/cheap-meals", function (req, res) {
  res.send(cheapMeals);
});
//console.log(cheapMeals);
//Respond with the json for all the meals (including it's reviews) that can fit lots of people
const largeMeals = meals.filter((item) => {
item.reviews = reviews.filter((obj) => obj.mealId === item.id);
return item.maxNumberOfGuests > 5
});
app.get("/large-meals", function (req,res) {
  res.send(largeMeals);
});
console.log(largeMeals);
//Respond with the json for a random meal (including it's reviews)
const randomMeals = meals[Math.floor(Math.random() * meals.length)];
app.get("/meal",function (req,res){
  res.send(randomMeals);
});
//console.log(randomMeals);
//Respond with the json for all reservations
app.get("/reservations",function (req,res) {
  res.send(reservations)
});
//Respond with the json for a random reservation
const randomReservations = Math.floor(Math.random() * reservations.length);
app.get("/reservations",function (req,res) {
  res.send(randomReservations);
});
//console.log(randomReservations);
module.exports = app;
