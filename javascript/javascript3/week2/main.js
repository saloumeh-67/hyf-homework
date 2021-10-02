//This code will move the li to the position 100, 100. Calling moveElement will,
//return a promise that resolves after the li element has been moved.
/// get  elements
console.log('main js loaded');
const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");
//target position
const redTarget = { color: "red", x: 20, y: 300 };
const blueTarget = { color: "blue", x: 400, y: 300 };
const greenTarget = { color: "green", x: 400, y: 20 };

const redPosition = {
  x: `${redTarget.x - parseInt(redBox.style.left)}`,
  y: `${redTarget.y - parseInt(redBox.style.top)}`,
};
const bluePosition = {
  x: `${blueTarget.x - parseInt(blueBox.style.left)}`,
  y: `${blueTarget.y - parseInt(blueBox.style.top)}`,
};
const greenPosition = {
  x: `${greenTarget.x - parseInt(greenBox.style.left)}`,
  y: `${greenTarget.y - parseInt(greenBox.style.top)}`,
};


//translateOneByOne
async function translateOneByOne() {
  
  try {
    await moveElement(redBox,redPosition);
    console.log("Element red has been moved");
    await moveElement(blueBox,bluePosition);
    console.log("Element blue has been moved");
    await moveElement(greenBox,greenPosition);
    console.log("Element green has been moved");
  } catch(error) {
    console.log("error!!");
  }
}
 translateOneByOne();
//all at once
//   const promisAllAtOnce = Promise.all([
//         moveElement(redBox, redTarget),
//         moveElement(blueBox, blueTarget),
//         moveElement(greenBox, greenTarget)
//     ])
//  Promise.all ([redPosition,bluePosition,greenPosition])
//  .then(() =>{
//    console.log('all circles has been moved');
//  })
//  .catch ((err)=>console.error(err));
