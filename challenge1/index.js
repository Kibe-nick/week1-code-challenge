//Student Grade Generator
function studentGradeGenerator() {
    
    let marks = prompt("Enter student marks (between 0 and 100):");
  
    
    marks = parseFloat(marks);
  
   
    if (isNaN(marks) || marks < 0 || marks > 100) {
      return "Invalid input. Please enter a number between 0 and 100.";
    }
  
   
    if (marks > 79) {
      return "A";
    } else if (marks >= 60 && marks <= 79) {
      return "B";
    } else if (marks >= 50 && marks <= 59) {
      return "C";
    } else if (marks >= 40 && marks <= 49) {
      return "D";
    } else {
      return "E";
    }
  }

 // console.log(studentGradeGenerator());
