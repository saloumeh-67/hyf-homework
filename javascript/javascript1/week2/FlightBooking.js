function getFullname(firstname,surname) {
    return firstname,surname;
}
console.log("saloumeh","sarabi");

let fullname1 = getFullname; 
let fullname2 = getFullname;
console.log("saloumeh sarabi,farzad soleimani");

const gender = prompt('are you lord or princess')
if (gender === 'lord') {
  console.log(getFullname(' lord',' ',' ',))
} else {
  console.log(getFullname('princess', ' ', ' '))
}

function useFormalName(gender, getFullname ) {
    return gender, getFullname;
}