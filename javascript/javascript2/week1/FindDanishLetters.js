const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";
function count (string) {  
    let count = {};
    danishString.split('').forEach(function(string) {
       count[string] ? count[string]++ : count[string] = 1;
    });
    return count;
  }
  console.log(count(danishString));
  console.log(count(danishString2));

