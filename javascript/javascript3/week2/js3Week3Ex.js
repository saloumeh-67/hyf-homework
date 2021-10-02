class user{
    constructor(firstName,lastName){
       this.firstName= firstName;
       this.lastName = lastName;
    } 
    fullName() {
       return  this.firstName .concat(this.lastName);
       //return `${this.firstName}${this.fullName}`;
   }
  }
  const user1 = new user("saloumeh", "sarabi");
  console.log(user1.fullName());
  
///////// sec EX
// class job  {
//     constructor(id, title, description, startDate,endDate){
//      this.id = [];
//      this.title =[];
//      this.description = [];
//      this.startDate = startDate;
//      this.endDate = endDate;
//      }
// }
// class education {
//     constructor(id, title, school, address, startDate,endDate){
//     this.id = [];
//     this.title = [];
//     this.school = [];
//     this.address =[];
//     this.startDate = startDate;
//     this.endDate = endDate; 
//      }
// }
// class CV {
//     constructor(email) {
//       this.jobs = [];
//       this.educations = [];
//       this.email = email;
//     }
  
//     addJob(job) {
//        this.jobs.push(job);
        
//     }
  
//     removeJob(job) {
      
//     }
  
//     addEducation(education) {
//       this.educations.push(education);
//     }
  
//     removeEducation(education) {
//       // add functionality here
//     }
//   }
//   const job1 = new job();

//Create the classes Job and Education.
​
//Job has five properties: id, title, description, startDate and endDate (the dates can be strings or actual Date objects).
//Education has six properties: id, title, school, address, startDate and endDate.
​
class Job {
  constructor(id, title, description, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
​
class Education {
  constructor(id, title, school, address, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.school = school;
    this.address = address;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
​
class CV {
  constructor(email) {
    this.jobs = [];
    this.educations = [];
    this.email = email;
  }
​
  addJob(job) {
    this.jobs.push(job);
  }
​
  removeJob(job) {
    const indexOfElement = this.jobs.indexOf(job);
    if (indexOfElement >= 0) this.jobs.splice(indexOfElement, 1);
  }
​
  addEducation(education) {
    this.educations.push(education);
  }
​
  removeEducation(education) {
    const indexOfElement = this.educations.indexOf(education);
    console.log(indexOfElement);
    if (indexOfElement >= 0) {
      this.educations = this.educations.filter(
        (oneEducation) => oneEducation.id !== education.id
      );
    }
  }
  renderCv(){
    document.getElementById("id");
    document.createElement("<element>");
    element.appendChild("<element>");
 } 
}
  
​
const job1 = new Job(1, "Director at Google", "Important stuff", "1999", "-");
const job2 = new Job(2, "janitor", "sweeping the floor", "1998", "1999");
const job3 = new Job(3, "frontend dev", "react.js", "2021", "-");
const education1 = new Education(
  1,
  "Administrator",
  "Harvard",
  "Boston",
  "1995",
  "1998"
);
const education2 = new Education(
  2,
  "Student",
  "HYF",
  "Copenhagen",
  "2021",
  "-"
);
​
const myCV = new CV("myemail@google.com");
/*
myCV.addJob(job1);
myCV.addJob(job2);
myCV.removeJob(job1);*/
myCV.addEducation(education1);
myCV.addEducation(education2);
myCV.removeEducation(education1);
console.log(myCV);