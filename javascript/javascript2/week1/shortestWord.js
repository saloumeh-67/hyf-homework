const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function countingwords() {
  let result = danishWords.reduce(function (x, y) {
 //condition ? value if true : value if false
    return x.length <= y.length ? x : y;
  });
  return result;
}
console.log(countingwords(danishWords));//return 'o'




