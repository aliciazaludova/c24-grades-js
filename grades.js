/* 

A score of 50-60 is an F
A score of 61-70 is a D
A score of 71-80 is a C
A score of 81-90 is a B
A score of 91-100 is an A */

// ----- the following are given in array:

const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60];

// each of the scores in the array has an index [i]. check each score above to see which property it fits: A, B, C, D, F. set values at 0 for starting point.


    /*
      If the score is greater than 90, increment grades.A by 1.

      You can use a series of `if/then` blocks, but you could
      also achieve this with a switch statement.
    */

// or is this a way to approach it...

for (let i = 0; i < scores.length; i++) {
                                    
    if (scores[i] < 60) {
        console.log("Your grade is F");
    }
    else if (scores[i] >= 61 && scores[i] <= 70) {
        console.log("Your grade is D");  
    }
    else if (scores[i] >= 71 && scores[i] <= 80) {
        console.log("Your grade is C");
    }
    else if (scores[i] >= 81 && scores[i] <= 90) {
        console.log("Your grade is B");
    }
    else if (scores[i] >= 91 && scores[i] <= 100) {
        console.log("Your grade is A");
    }
}

// Use console.log() to output the following criteria to the browser console.

//How many of each grade? Accomplish this with a for..in loop.

const grades = {
    A: 0,
    B: 0,
    C: 0, 
    D: 0, 
    F: 0
 } 

for (i = 0; i < scores.length; i++) {
    if (scores[i] >= 91) {
        grades.A++;
    } else if (scores[i] >= 81) {
        grades.B++;
    } else if (scores[i] >= 71) {
        grades.C++;
    } else if (scores[i] >= 61) {
        grades.D++;
    } else {
        grades.F++;
    }
    console.log(grades);
}

// i know this is totally wrong but i'm basing it on the objects video. there aren't "properties" but there are numbers, so replace the 3 instances of "prop" with _____ ?:
// if we just want to print each item in scores (array) this works but not relevant now:
/* for (var item in scores) {//for each thing in this array do this--we're not setting up a counter because it's built in. it says for each one in this array do this. the word item could be taco.
    console.log(item, ": ", scores[item]);
 } */

// What is the lowest score? Sort the array and find out.

// sort numeric array

Math.min(82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60);

// What is the highest score?

Math.max(82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60);

// Which grade had the most students achieve it? Use an if statment, and a currentGradeCount variable, in your for..in loop to see if the current grade's value is higher than the last one.

// Which grade had the fewest students achieve it?

