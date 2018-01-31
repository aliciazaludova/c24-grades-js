/* 
WHAT DO I WANT TO DO. PLAIN ENGLISH:

1. i want to test each number in const scores to see if it fits into one of the five categories below:

A score of 50-60 is an F
A score of 61-70 is a D
A score of 71-80 is a C
A score of 81-90 is a B
A score of 91-100 is an A */

// ----- the following are given from the assignment:

const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60];

// i understand each of the scores in the array has an index [i]. in plain english, i want to stop at each score above and see if it fits the definition of variable A, B, C, D, F. 

const grades = { } // You'll need to change this line of code (not sure how to use this)

for (let i = 0; i < scores.length; i++) {

// --------------------------------------
// can i use:

const gradeArray = [gradeF, gradeD, gradeC, gradeB, gradeA];

    /*
      If the score is greater than 90, increment grades.A by 1.

      You can use a series of `if/then` blocks, but you could
      also achieve this with a switch statement.
    */

// or can i start like this:

const gradeF >= 50 && <= 60;

const gradeD >= 61 && <= 70;

const gradeC >= 71 && <= 80);

const gradeB >= 81 && <= 90;

const gradeA >= 91 && <= 100);

// or is this a way to approach it...

if (scores >= 50 && scores <= 60) {
console.log("Your grade is F");
}
else if (scores >= 61 && scores <= 70) {
console.log("Your grade is D");  
}
else if (scores >= 71 && scores <= 80) {
console.log("Your grade is C");
}
else if (scores >= 81 && scores <= 90) {
console.log("Your grade is B");
}
else if (scores >= 91 && scores <= 100) {
console.log("Your grade is A");
    }
}

// Use console.log() to output the following criteria to the browser console.

//How many of each grade? Accomplish this with a for..in loop.

for () { }

// What is the lowest score? Sort the array and find out.

Math.min(82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60);

// What is the highest score?

Math.max(82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60);

// Which grade had the most students achieve it? Use an if statment, and a currentGradeCount variable, in your for..in loop to see if the current grade's value is higher than the last one.

// Which grade had the fewest students achieve it?

