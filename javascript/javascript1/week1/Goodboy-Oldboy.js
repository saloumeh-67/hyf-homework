console.log("Goodboy-Oldboy!");
var dogYearOfBirth = 2021;
var dogYearFuture = 2030;
var dogYear = dogYearFuture - dogYearOfBirth
var shouldShowResultInDogYears = dogYearOfBirth - dogYearFuture;
var shouldShowInHumanYears = (dogYearOfBirth - dogYearFuture) * 6;
var shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears) {
    console.log("Your dog will be " + dogYear + "dog years old in" +  dogYearFuture + ".") 
} else {
    console.log("Your dog will be " + inHumanYear + " human years old in " + dogYearFuture + ".")
} 