const class07Students = [];
function addStudentToClass(studentName) {
   if ( studentName >= 6 )
   return "Cannot add more students to class 07";
   if (studentName === " ")
   return "Name is empty. So you can not add to class.";
   if (studentName === "queen") 
    return class07Students.push(studentName);
}
// expect output 7 names with Queen.
console.log(class07Students); 

    function getNumberOfStudents() {
        const totalNumberOfStudents = class07Students.length;
        return totalNumberOfStudents;}
    

    addStudentToClass("Saloumeh");
    addStudentToClass("Gorg");
    addStudentToClass("Louise");
    addStudentToClass("Tom");
    addStudentToClass("Helen");
    addStudentToClass("Nana");
    addStudentToClass("Bibi");
    addStudentToClass("");
    addStudentToClass("Queen");

  
console.log("Total number of students =  " + getNumberOfStudents());