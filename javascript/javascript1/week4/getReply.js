let userName = " ";
let todo = [];
function getReply(command) {
  //'ask for name.'
  const array = command.split(" ");
  let response = " ";
  if (command.includes("hello my name is ")) {
    userName = array[array.length - 1];
    return "Nice to meet you " + userName;
  } else if (command.includes("what is my name")) {
    return "your name is " + userName;
  } else if (command.includes() {
    return "your name is not find";
  }
  //'adding to todos.'
  else if (command.includes("add ") && command.includes(" to my todos")) {
    todo.push("fishing");
    todo = command(command.length - 1);
    return "fishing is added to your todos";
  } else if (command.includes("add signging")) {
    todo.push("signging");
  } else if (command.includes("remove fishing")) {
    for (let i = 0; i < todo.length; i++) {
      if (todo[i].includes("fishing")) {
        todo.splice(i, 1);
        return "removed fishing from your todo";
      }
    }
  }
  else if(command.includes("on my todo"))
    {
        return(todo);
    }
  else if (command.includes("is it today?")) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const yyyy = today.getFullYear();
    console.log(`${dd}. of ${monthNames[today.getMonth()]} ${yyyy}`);
  }
  else if (command.includes("What is")){
    const matharray = command.split(" ");
    let num1 = matharray[2];
    let num2 = matharray[4];
    let operator = matharray[3];
    if (operator === "+")
    {
       return (parseInt(num1)+parseInt(num2));
    }
    else if (operator === "-")
    {
        return (num1-num2);
    }
    else if (operator === "*")
    {
        return (num1*num2);
    }
    else if  (operator === "/")
    {
        return (num1/num2);
    }
    else
    {
        return("invalid operator");
    }
}
else if (command.includes("Set a timer"))
{
    {
        const myTimer = command.split(" ");
        const timeseconds = myTimer[4] * 60 * 1000;
        setTimeout(()=>{console.log("Javascript - week04 homework finished")}, timeseconds);
        return `timer set for ${myTimer[4]} minutes`;
  }
 }

}

console.log(getReply("hello my name is Benjamin")); // 'we should get nice to meet you Benjamin.'
console.log(getReply("What is my name?")); // 'Your name is Benjmain.
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("Add singing in the shower to my todo")); // "singing added to your todo"
console.log(getReply("Remove fishing from my todo")); //"Removed fishing from your todo"
console.log(getReply("What is on my todo?")); //What is on my todo?
console.log(getReply("What day is it today?")); // like 30. of August 2019
//console.log(getReply("What is 23 + 3"));
//console.log(getReply("What is 100 - 5"));
//console.log(getReply("What is 100 * 2"));
//console.log(getReply("What is 9 / 3"));
//console.log(getReply("Set a timer for 1 minute"));
