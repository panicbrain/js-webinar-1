'use strict';

/**
 * The function returns the grade (1-5) of the student,
 * based on the score and the following rules:
 *  - 90 -    : 5
 *  - 80 - 89 : 4
 *  - 70 - 79 : 3
 *  - 60 - 69 : 2
 *  -    - 59 : 1
 *
 * @param {number} score (0 <= score <= 100)
 * @returns {number} grade or 0 if any arguments are not proper
 */
function grade(score) {
    let gradeOfStudent;
    /*
     * Your task is to calculate the grade of the student
     * based on his/her score which can be found in the
     * score variable and those rules can be found in the
     * documentation of the function.
     * Store the grade in the gradeOfStudent variable.
     * Also take into consideration the documentation of the function!
     */
    // PLACE YOUR CODE BETWEEN THIS...
  //  gradeOfStudent = (score <0) ? 0 :((score > 100) ? 0 :((score>=90) ? 5 : ((score>=80) ? 4 : ((score>=70) ? 3 : ((score >=60) ? 2: 1))))) 
  gradeOfStudent = (score < 0 || score > 100) ? 0 : ((score >=0 && score < 60) ? 1 : Math.min(Math.floor((score - 40)/10), 5));
    // ...AND THIS COMMENT LINE!
    return gradeOfStudent;
}
module.exports = grade;