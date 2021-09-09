const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";
function count (string) {  
    let count = {};
    string.split('').forEach(function(string) {
       count[string] ? count[string]++ : count[string] = 1;
    });
    let result = {}
    if (count["ø"]) {
      result["ø"] = count["ø"]
    }
    result.total=count["ø"];
    return result;
  }
  
  console.log(count(danishString));
  console.log(count(danishString2));

