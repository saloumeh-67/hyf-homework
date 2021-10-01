////doubelnumber function
let numbers = [1, 2, 3, 4];
let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    newNumbers.push(numbers[i] * 2);
  }
};
console.log("The doubled numbers are",newNumbers);
//doubles the odd numbers in an array and throws away the even number.
newNumbers = numbers.filter((odd) => odd % 2).map((double) => double * 2); 
console.log(newNumbers);
