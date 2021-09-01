const class07Students = [];
function addStudentToClass(studentName) {
  if (studentName.includes(studentName)) {
    console.log("Student " + studentName + " can be add to this class ");
  }
  if (!studentName) {
      return;
  }
  if (studentName === "Queen") {
      class07Students.push(studentName);
      console.log(class07Students);
  }
  else if (class07Students.length > 6 ) {
      console.log("we can't add new student in this class");
  }
  else {
      class07Students.push(studentName);
      console.log(class07Students);
  }
}

function getNumberOfStudents() {
    return class07Students.length;
}
    

    addStudentToClass("Saloumeh");
    addStudentToClass("Gorg");
    addStudentToClass("Louise");
    addStudentToClass("Tom");
    addStudentToClass("Helen");
    addStudentToClass("Nana");
    addStudentToClass("Bibi");
    addStudentToClass(" ");
    addStudentToClass("Queen");

    getNumberOfStudents();
    console.log(class07Students.length);
