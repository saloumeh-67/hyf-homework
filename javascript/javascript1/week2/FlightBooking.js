function getFullname(firstname,surname) {
    return firstname,surname;
}
console.log("saloumeh","sarabi");

let fullname1 = getFullname; 
let fullname2 = getFullname;
console.log("saloumeh sarabi,farzad soleimani");

var gender = prompt('are you lord or princess')
if (gender === 'lord') {
  console.log(getFullname(' lord',' farzad', " soleimani ",))
} else {
  console.log(getFullname('princess', ' saloumeh', " sarabi "))
}

function useFormalName(gender, getFullname ) {
    return gender, getFullname;
}