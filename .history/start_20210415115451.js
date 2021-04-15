// # Switch if... 

// #### 1. Color Analyzer
// Create a switch statement that prints a different statement for each color possibility(red, blue, green, yellow).
const color = "blue"
switch (color) {
    case "red":
        console.log("q2", "red");
        break;
    case "green":
        console.log("q2", "green" + " yey its green color ");
        break
    case "blue":
        console.log("q2", "blue");
        break;
    case "yellow":
        console.log("q2", "yellow");
}


// #### 2. Grading
// Create a switch statement that prints different comments depending on a grade.


const grades = "A";
switch (grades) {
    case "D":
        console.log("q3", "25 so sorry to that");
        break
    case "C":
        console.log("q3", "50 half half ");
        break
    case "B":
        console.log("q3", "75 good job");
        break
    case "A":
        console.log("q3", "100 you are a machine");
}



// #### 3. Fruits
// Create a switch statement that prints different statement for various fruit(e.g.banana, orange, strawberry, apple).

let fruits = "two";
switch (fruits) {
    case "one":
        console.log("Bananas are full of irons")
        break
    case "two":
        console.log("Oranges are tasty")
        break
    case "three":
        console.log("Strawberry are red")
        break
    case "four":
        console.log("apples are apples")
}


// #### 4. Percentage Complete. 
// * If percentageComplete is below 30, print "Still a long way to go". 
const percentageComplete = 100;
if (percentageComplete > 30) {
    console.log("Still a long way to go")
}

// * If the percentageComplete is between 30 and 50, print "Slowly getting there".
if (percentageComplete > 30 && percentageComplete < 50) {
    console.log("slowly getting there");
}

// * If percentageComplete is between 51 and 80, print "You can do it!". 
if (percentageComplete > 51 && percentageComplete < 80) {
    console.log("You can do it");
}


// * If percentageComplete is between 81 and 99, print "This is the last push!".
if (percentageComplete >= 81 && percentageComplete >= 99);
console.log("This is the last push")

// * If percentageComplete is 100, print "You're there. Well done!". 
if (percentageComplete);
console.log("yor are there well done!")


// #### 5. Differences
//     * When should you use a switch statement versus an`if else` statement.Comment your answer in your js file.



// var score = 70;

// if (score > 50) {
//     console.log("Score is higher than 50");
// } else {
//     console.log("Score is 50 or lower");
// }
// var score = 70;

// switch (score) {
//     case score > 50:
//         console.log("Score is higher than 50");
//         break;
//     default:
//         console.log("Score is 50 or lower");
// }
// var score = 70;

// switch (true) {
//     case score > 50:
//         console.log("Score is higher than 50");
//         break;
//     default:
//         console.log("Score is 50 or lower");
// }