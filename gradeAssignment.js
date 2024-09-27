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