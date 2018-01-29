/* 
WHAT DO I WANT TO DO. PLAIN ENGLISH:

1. LOOP THROUGH THE ARRAY AND TEST EACH NUMBER TO SEE WHICH OF THESE CATEGORIES IT FITS INTO:

A score of 50-60 is an F
A score of 61-70 is a D
A score of 71-80 is a C
A score of 81-90 is a B
A score of 91-100 is an A

2. ASSIGN IT THE NAME/VARIABLE A, B, C, D, OR F, ACCORDINGLY

*/

const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60];

const grades = {} // You'll need to change this line of code

for (let i = 0; i < scores.length; i++) {
    /*
      If the score is greater than 90, increment grades.A by 1.

      You can use a series of `if/then` blocks, but you could
      also achieve this with a switch statement.
    */

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