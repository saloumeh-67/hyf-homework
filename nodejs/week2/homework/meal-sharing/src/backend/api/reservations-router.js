const { request, response } = require("express");
const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");
//	Respond with the json for all reservations
router.get("/", async (request, response) => {
  try {
    console.log("in /api/reservations");
    response.statusCode = 200;
    response.send(reservations);
  } catch (error) {
    throw error;
  }
});
//Respond with the json for the reservation with the corresponding id
router.get("/:id", async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    console.log(id);
    const reservationID = reservations.find((reservation) => reservation.id === id);
    if (reservationID) {
      response.json(reservationID);
    } else {
      return response.status(400).send("This ID doesn't match any reservation ");
    }
  } catch (error) {
    throw error;
  }
});
module.exports = router;
