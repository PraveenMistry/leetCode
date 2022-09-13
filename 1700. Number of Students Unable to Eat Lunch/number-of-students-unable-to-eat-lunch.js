/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let round = 0;
    while (true) {
        // run till all students able to eat or round is equal to length of students
        if (students.length == 0 || round == students.length){
            break;
        }
        if (students[0] != sandwiches[0]) {
            students.push(students.shift());
            round++;
        } else {
            students.shift();
            sandwiches.shift();
            round = 0;
        }
    }
    return students.length;
};

/*
Runtime: 107 ms, faster than 23.18% of JavaScript online submissions for Number of Students Unable to Eat Lunch.
Memory Usage: 41.8 MB, less than 86.36% of JavaScript online submissions for Number of Students Unable to Eat Lunch.
*/