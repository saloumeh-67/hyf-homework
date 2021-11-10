const { request } = require("express");
const express = require("express");
const router = express.Router();

const reviews = require("../data/reviews.json");
//Respond with the json for all reviews --------------------------------
router.get("/", async (request, response) => {
  try {
    response.statusCode = 200;
    console.log("in /api/reviews");
    response.send(reviews)
  } catch (error) {
    throw error;
  }
});
//Respond with the json for the review with the corresponding id------------------------------
router.get("/:id",async(request,response)=>{
  try{
    const {id} = request.params
    const reviewId = reviews.find((review)=>review.id === Number(id))
    console.log(id);
    response.json(reviewId);
    if (!reviewId){
      return send.statusCode(404).send("review id not found")
    }
  }catch (error) {
    throw error;
  }
})
module.exports = router;