// STEP 1: Print text to the browser console is string ""

console.log("Hello, World!");

// STEP 2: Variables

// Store text values in variables

const userName = "Jeffrey";
const favoriteAnimal = "Orca";


// Print the variables to the console
console.log("My name is " + userName);
console.log("My favorite animal is " + favoriteAnimal);
// STEP 3: User interaction
// Display a pop-up message
alert("tervertetuloa hieoulle nettisivylleni!");

// Ask the user for their name

const visitorName = prompt("What is your name?");

// Print the user's answer
console.log(visitorName);

console.log("Welcome " + visitorName + "! Welcome to javascript!");
// Ask the user for their favorite animal

const visitorFavoriteAnimal = prompt("What is your favorite animal?");

// Create a sentence using both answers

console.log("Hello, " + visitorName + "! Your favorite animal is " + visitorFavoriteAnimal + ".");

// ⭐⭐ BONUS Ask the user for their favorite animal.If their favorite animal is "Blue Elephant", print: Great choice! That's my favorite animal too!
// ⭐⭐ BONUS Otherwise, print: Nice! Your favorite animal is [animal]. Can you figure out how to do this using if / else?

// const visitorFavoriteAnimal = prompt("What is your favorite animal?");

// Ask the user for their favorite animal
const visitorFavoriteAnimal = prompt("What is your favorite animal?");

// Create a sentence using both answers
console.log("Hello, " + visitorName + "! Your favorite animal is " + visitorFavoriteAnimal + ".");
// BONUS: Check the user's favorite animal

if (visitorFavoriteAnimal === "Orca") {
    console.log("Great choice! That's my favorite animal too!");
} else {
    console.log("Nice! Your favorite animal is " + visitorFavoriteAnimal + ".");
}

// STEP 4: Age check

// Ask the user for their age
const age = prompt("How old are you?");

// Check if the user is 18 or older
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are under 18.");
}

// STEP 5: Functions

// Create a function that greets a user
function greetUser(name) {
    console.log("Hello " + name + "!");
}

// Test the function with different names
greetUser("Jeffrey");
greetUser("John");
greetUser("Juho");

greetUser(visitorName);

// STEP 6: Button - Connect JavaScript to the Page

const messageButton = document.getElementById("messageButton");

messageButton.addEventListener("click", function() {
    alert("Orcas rule the seven seas!");
});

