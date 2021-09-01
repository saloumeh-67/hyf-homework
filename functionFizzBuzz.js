function fizzBuzz(){
    for(let i= 0; i < 101; i++){
    
    if( i % 3 == 0 && i % 5 == 0 ){
    console.log("FizzBuzz");
    }
    
    if(i % 3 == 0){
    console.log("Fizz");
    }
    
    if(i % 5 == 0){
    console.log("Buzz");
    }
    console.log(i);
    }
    }
    
    fizzBuzz();

or 


    function fizzBuzzArray(fizzNumber,buzzNumber){

        let arrayResult = []
        for ( let i=1; i<=100; i++){
        if (i%fizzNumber ===0 && i%buzzNumber === 0){
        arrayResult.push("fizzBuzz")
        }else if(i%fizzNumber === 0){
        arrayResult.push("fizz")
        }else if(i%buzzNumber === 0){
        arrayResult.push("buzz")
        }else {
        arrayResult.push(i)
        }
        }
        
        return arrayResult
        }
        const arrayResult = fizzBuzzArray(3,5)
        console.log (arrayResult)