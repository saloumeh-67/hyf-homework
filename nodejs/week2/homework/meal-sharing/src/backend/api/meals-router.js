const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const meals = require("../data/meals.json");

//Respond with the json for the meals with the corresponding id
router.get("/:id", async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    console.log(id);
    const mealsId = meals.find((meal) => meal.id === id);
    if (mealsId) {
      response.json(mealsId);
    } else {
      return response.status(400).send("This ID Not matching any meal ids ");
    }
  } catch (error) {
    throw error;
  }
});

router.get("/", async (request, response) => {
  try {
    const maxPrice = request.query.maxPrice;
    //console.log(maxPrice)
    const title = request.query.title;
    //console.log(title)
    const createdAt = request.query.createdAt;
    //console.log(createdAt)
    const limit = parseInt(request.query.limit);
    console.log(limit);
    //Get meals that has a price smaller than maxPrice
    if (maxPrice) {
      const cheapPrice = meals.filter(
        (meal) => meal.price < parseInt(maxPrice)
      );
      response.json(cheapPrice);
    }
    //Get meals that partially match a title.
    if (title) {
      const titleToLowerCase = title.toLowerCase();
      const foodTitle = meals.filter((meal) =>
        meal.title.toLowerCase().includes(titleToLowerCase)
      );
      response.json(foodTitle);
    }
    //Get meals that has been created after the date
    if (createdAt) {
      const createdAfterDate = meals.filter(
        (meal) => new Date(meal.createdAt) > new Date(createdAt)
      );
      response.json(createdAfterDate);
    }
    //Only specific number of meals
    if (limit) {
      const limitMeals = meals.slice(0, limit);
      response.json(limitMeals);
    } else {
      return response.status(400).send(" Request Not found ");
    }
  } catch (error) {
    throw error;
  }
});

//Respond with the json for all the meals
router.get("/", async (request, response) => {
  try {
    console.log("in /api/meals");
    response.send(meals);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
