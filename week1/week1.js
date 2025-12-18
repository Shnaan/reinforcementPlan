
const outputArea = document.getElementById("output-area");
let message ="string message";

function appendToPage(message) {
    // Create a new div element for each message
    const newMessage = document.createElement("div");
    newMessage.textContent = message;

    // Append the new message element to the output area
    outputArea.appendChild(newMessage);
    
    
}


/*  

Exercise 1 — let vs const (immutability thinking)
Task

Create a variable appName with value "TravelGuide"

Try to reassign it

Fix the error the React way


*/
console.log("** Week 1 excercises 1 **");
appendToPage("** Week 1 excercises 1 **");
const appName = "TravelGuide";
try{
    // will raise exception costant can't be assigned
    appName ="can't assign constant ";
}catch(err){
    message = "Error:" +err.message;
    console.log(message);
appendToPage(message);

}

/*
Exercise 2 — Template Literals (dynamic UI text)
Task

Create a dynamic title message.

Requirements

Variable userName

Variable placesCount

Output:

"Welcome Alex — 5 places available"

const userName = "Alex";
const placesCount = 5;



💡 Use template literals, not +

*/

const userName ="Alex  ";
const placeCount= 5;
message = `Wellcome ${userName}-${placeCount} places avaliable `;
appendToPage("** Week 1 excercises 2 **");
console.log("** Week 1 excercises 2 **");
console.log(message);
appendToPage(message);

/**
 Exercise 3 — Conditional Rendering Logic (React mindset)
Task

Create a message that follows UI rules:

Condition	Message
placesCount === 0	"No places found"
placesCount > 0	"Found X places"
Starter
const placesCount = 0;

// write logic here


📌 Use ternary operator.

strict equality and loose equality
 */


appendToPage("** Week 1 excercises 3 **");
console.log("** Week 1 excercises 3 **");

message =placeCount===0?`No places found.`:`Found ${placeCount} places`
console.log(message);
appendToPage(message);




/**
 Exercise 4 — Boolean Logic (UI visibility)
Task

Simulate UI state logic.

Rules

isLoading === true → show "Loading..."

hasError === true → show "Error loading data"

Else → show "Data loaded"

Starter
const isLoading = false;
const hasError = false;

// write logic here


💡 Hint: combine if / else or ternary logic.
 */

appendToPage("** Week 1 excercises 4 **");
console.log("** Week 1 excercises 4 **");

const isLoading = false;

message = isLoading?'Loading .... ':' Data loaded .';
console.log(message);
appendToPage(message);

const hasError = false;
message = hasError?'Error loading data':'Data loaded';
console.log(message);
appendToPage(message);








/**
 Exercise 5 — Mini React-Style Scenario (Thinking Exercise)
Task

Predict output before running.

const isLoggedIn = true;
const userName = "Sara";

const message = isLoggedIn && `Welcome ${userName}`;

console.log(message);

Questions

What is printed?

Why does this work without if?

Where do you see this in React?
 */

const isLoggedIn = false;
const userName2 = "Sara";
 message = isLoggedIn && `Welcome ${userName2}`;

appendToPage("** Week 1 excercises 5 **");
console.log("** Week 1 excercises 5 **");
console.log(message);
appendToPage(message);



/**
 🧠 BONUS (Optional, but powerful)

Rewrite Exercise 4 using:

ONLY && and ||

NO if
 */

appendToPage("** Week 1 excercises bonus **");
console.log("** Week 1 excercises bonus  **");

message = isLoading ||'Data loaded';
console.log(message);
appendToPage(message);


message = hasError||'Data loaded';
console.log(message);
appendToPage(message);



/**
 * 
 * bnus correction
 */
appendToPage("** Week 1 excercises bonus correction **");
console.log("** Week 1 excercises bonus correction **");

 (isLoading && "Loading...") ||
  (hasError && "Error loading data") ||
  "Data loaded";

console.log(message);
appendToPage(message);