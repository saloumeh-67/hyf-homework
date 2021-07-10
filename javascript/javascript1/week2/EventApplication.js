const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
function getEventWeekday(daysLeft) {
const today = new Date();
const dayIndex = (today.getDay() + daysLeft)% 7;
console.log ("The event will be held on "  + weekDays[dayIndex] +  "  ");    
}

console.log(getEventWeekday(9)); // Logs out "Monday"
console.log(getEventWeekday(3)); // Logs out "Tuesday"