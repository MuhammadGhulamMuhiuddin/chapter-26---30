// Question 01

// let userInp = prompt("Enter a positive integer floating number:");
// document.write("Number: " + userInp);

// let round = Math.round(userInp);
// document.write("<br>"+"Round Off Value: " + round + "<br>");

// let floor = Math.floor(userInp);
// document.write("Floor Value: "+ round + "<br>");

// let ceil = Math.ceil(userInp);
// document.write("Ceil Value: "+ ceil);



// Question 02

// let userInp = prompt("Enter a negative integer floating number:");
// document.write("Number: " + userInp);

// let round = Math.round(userInp);
// document.write("<br>"+"Round Off Value: " + round + "<br>");

// let floor = Math.floor(userInp);
// document.write("Floor Value: "+ round + "<br>");

// let ceil = Math.ceil(userInp);
// document.write("Ceil Value: "+ ceil);


// Question 03

// const input = prompt("Please enter a number:");
// if (input < 0){
//     document.write("Absolute number: " + -input);
// }else{
//     document.write("Absolute number: " + input);
// }

// Question 04

// alert("rolled!")
// const diceValue = Math.floor(Math.random() * 6) + 1;
// document.write("You rolled: " + diceValue);


// Question 05

// alert("Tosss")
// var coin = Math.floor(Math.random() * 2) + 1;
// if (coin === 1) {
//     document.write("1<br>random coin value: Tails");
// } else {
//     document.write("2<br>random coin value: Heads");
// }


// Question 06

// var ranValue = Math.floor((Math.random() * 100) + 1);
// document.write("Random numbers between 1 to 100: " + ranValue);


// Question 07

// let weight = prompt("Enter your weight in kilograms");
// let parsedWeight = parseFloat(weight.replace(/[^\d.]/g, ''));
// document.write("The weight of user is " + parsedWeight + " kilograms");


// Question 08

// let secretNumber = Math.floor(Math.random() * 10) + 1;
// let userInput = prompt("Guess a number between 1 and 10");
// if (parseInt(userInput) === secretNumber) {
//     alert("Congratulations! You guessed the correct number.");
// } else {
//     alert("Sorry, the correct number was " + secretNumber);
// }