/*reference:
https://www.w3schools.com/JSREF/jsref_if.asp#:~:text=The%20if%2Felse%20statement%20executes,actions%20based%20on%20different%20conditions.
*/
//user's grade
let grade = prompt("Enter your grade: ");

//checking the user's grade using else if statement
if (grade < 70){
    console.log("Needs improvement *-*");
} else if (grade >=70 && grade <=79){
    console.log("Fair");
} else if (grade >=80 && grade <=89){
     console.log("Good");
} else {
    console.log("Excellent >o<");
}

//PS.sir,, this code will only run sa google console 