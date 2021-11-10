const express = require("express");
const router = express.Router();

const movies = require("../data/movies.json");

router.get("/", async (request, response) => {
  const { beginYear, endYear } = request.query;

  console.log(beginYear, endYear);

  response.send({ data: movies });
});

/* router.get("/1", async (request, response) => {
  //const currentMovie = movies.find((movie) => movie.id === 1);
  const currentMovie = movies.find((movie) => {
    return movie.id === 1;
  });
  response.send({ data: currentMovie });
}); */
router.get("/:id", function (request, response) {
  const id = parseInt(request.params.id, 10);

  const currentMovie = movies.find((movie) => movie.id === id);
  response.send({ data: currentMovie });
});

module.exports = router;
