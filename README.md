# week1-code-challenge
# Week 1 Toy Problems

## Prerequisites

1. **Create a repository on your GitHub account**: Initialize a repository with a README file.
   - Organize each challenge solution in separate folders, with 3-4 files per solution. Each file should contain one solution.
   
2. **Use JavaScript**: Implement solutions using JavaScript.
   
3. **Push to GitHub**: Once completed, push your solutions to the repository.
   
4. **Submit for grading**: Provide the repository link for evaluation.
   
5. **Ensure a Well-Written README**: Include setup instructions, usage guidelines, and examples.

## Challenge 1: Student Grade Generator (Toy Problem)

Write a function that prompts the user to input student marks (between 0 and 100) and outputs the corresponding grade:
- A > 79
- B - 60 to 79
- C - 59 to 49
- D - 40 to 49
- E - less than 40

## Challenge 2: Speed Detector (Toy Problem)

Write a program that takes the speed of a car as input. It should:
- Print "Ok" if the speed is less than 70.
- Calculate demerit points for speeds above 70 (1 point per 5 km/h over), and print the total points.
- Print "License suspended" if points exceed 12.

## Challenge 3: Net Salary Calculator (Toy Problem)

Write a program to calculate an individual’s Net Salary based on inputs of basic salary and benefits. It should calculate:
- Payee (Tax) using KRA rates.
- NHIF Deductions based on specified brackets.
- NSSF Deductions according to Tier I and II.
- Gross Salary and Net Salary calculations.

### Example Usage

- **Challenge 1**:
  ```javascript
 // Example usage for Student Grade Generator
console.log(studentGradeGenerato()); // Outputs the grade based on user input marks

// Example usage for Speed Detector
console.log(speedDetector(80)); // Outputs demerit points for speed 80 km/h

// Example usage for Net Salary Calculator
console.log(netSalaryCalculator(50000, 10000)); // Outputs the net salary based on 50,000 basic salary and 10,000 benefits

