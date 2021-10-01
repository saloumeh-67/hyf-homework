// Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
// Create a function as a const and try creating a function normally. Call both functions. 
// Create an object that has a key whose value is a function. Try calling this function.
 let greeting = [
    function askName() {
        console.log(" what is your name? ");
    },
    function askSurname() {
        console.log(" what is your last name?");
    },
    function showAll() {
       setTimeout(()=>{
        console.log(" Hi have a good day");
    },1000);
  }
];
for (i = 0; i < greeting.length; i++) {
    greeting[i]();
}
////////number 2
const newFunction = function(){ 
    console.log('This is a new function');
};
function haveFunction(){
    console.log('This is normal function');
};

newFunction();
haveFunction();

/////////number3
let person = {
    name: "lili",
    sayName: function() {
      console.log(this.name);
    }
  };
  
  person.sayName();