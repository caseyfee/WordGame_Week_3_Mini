
// * As a user, I want to start the game by clicking on a button. 
    // create button in html
    // connect button to formula to start the game
    // object/array full of word options should be randomly chosen using math.floor math random 

// * As a user, I want to try and guess a word by filling in a number of blanks that match the number of letters in that word.
    // Letters will be hidden
    // keystrokes will be tracked. If keystroke matches hidden letter, reveiw/unhide letter tile
    // If keystroke is not correct, do nothing
    // when timer gets to === 0, game is over and new word starts again
    // 

// * As a user, I want the game to be timed. 
    // Create a timer that that counts down during each round of the game

// * As a user, I want to win the game when I have guessed all the letters in the word.
    // if all hidden letters have been found, create a message congradulating 
    // 

// * As a user, I want to lose the game when the timer runs out before I have guessed all the letters.

// * As a user, I want to see my total wins and losses on the screen. 
    // Create localstorage scoreboard that accumulates wins and losses (times user sucesses)



// STEP ONE!!!!
// When you click the start button, the timer starts and you are presented with a question
// Create a button using HTML - Done 

// Create timer function that starts when button is pressed
// Create timer counting down from 75 seconds - DONE?
var secondsLeft = 75;
const timer = function () {
    var timeEl = document.querySelector(".time");
    secondsLeft--;
    timeEl.textContent = "Time Left: " + secondsLeft + ".";
}
const startTimer = function () {
    setInterval(timer, 1000);
}

// if(secondsLeft === 0) { -don't forget }
// Stops execution of action at set interval
// clearInterval();
// Calls function to create and append image
// sendMessage();



// Add an event listener for the start buttom - onclick? - that starts questions AND TIMER, Likely a query selector - on click
var startQuiz = document.querySelector("#start-button");
startQuiz.addEventListener("click", startTimer());


// Check that startQuiz worked
// console.log()

// Once quiz starts - hide button

// STEP TWO!!!!

// Create list of questions and assign correct - true and incorrect - false to them  
// variables - String match string
// if statement
// Question should pop up
// When you answer incorrectly, time is subtracted from the clock
// Create if statement that if incorrect is chosen, subtract 10 seconds from clock
// If clock time === 0 . return out of entire quiz and timer function

// STEP THREE!!!!
// When you answer the question, you are presented with another question
// 



// When all questions are answered or the timer reaches 0, game is over


// Whent the game is over, initials and score is saved







// Function to create and game over image
function sendMessage() {
    timeEl.textContent = " ";
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", "images/image_1.jpg");
    mainEl.appendChild(imgEl);

}
