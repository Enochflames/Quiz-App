
let questions = [
    {
    numb: 1,
    question: " What is a closure in JavaScript?",
    answer: "A function bundled with its lexical environment.",
    options: [
    "A function bundled with its lexical environment.",
    "A method to declare variables globally.",
    "A way to create immutable objects.",
    "A type of loop structure."
    ]
    },
    {
    numb: 2,
    question: "How does the this keyword behave in arrow functions?",
    answer: "It retains the value of this from its enclosing lexical context.",
    options: [
    "It refers to the global object.",
    "It refers to the object that called the function.",
    "It refers to the object the function is defined in.",
    "It retains the value of this from its enclosing lexical context."
    ]
    },
    {
    numb: 3,
    question: "Which method is used to create a shallow copy of an object in JavaScript?",
    answer: "Object.assign()",
    options: [
    "Object.clone()",
    "Object.create()",
    "Object.assign()",
    "Object.copy()"
    ]
  },
    {
    numb: 4,
    question: "What is hoisting in JavaScript?",
    answer: "The process of moving function and variable declarations to the top of their scope.",
    options: [
    "The process of moving function and variable declarations to the top of their scope.",
    "A method for optimizing code execution.",
    "A technique for managing asynchronous code.",
    "The process of removing unused variables."
    ]
  },
    {
    numb: 5,
    question: "Which of the following is not a valid way to declare a variable in JavaScript?",
    answer: "assign",
    options: [
      "let",
      "var",
      "assign",
      "const"
    ]
  },
  {
    numb: 6,
    question: "How does Promise.all() behave when one of the promises is rejected?",
    answer: "It immediately rejects with the reason of the first rejected promise.",
    options: [ 
    "It waits for all promises to resolve.",
    "It immediately rejects with the reason of the first rejected promise.",
    "It resolves with undefined.",
    "It continues processing remaining promises"
    ]
 },
    {
    numb: 7,
    question: "What is the purpose of the bind() method in JavaScript?",
    answer: "To set the `this` context for a function.",
    options: [
    "To set the `this` context for a function.",
    "To execute a function immediately.",
    "To create a deep copy of an object.",
    "To merge two arrays."
    ]
 },
    {
    numb: 8,
    question: "Which of the following is an example of a higher-order function?",
    answer: "A function that accepts another function as an argument.",
    options: [
    "A function that accepts another function as an argument.",
    "A function that loops over an array.",
    "A function that creates a closure.",
    "A function that returns a boolean value."
    ]
},
{
    numb: 9,
    question: "What does the async keyword do when applied to a function?",
    answer: "It returns a promise.",
    options: [
    "It makes the function synchronous",
    "It returns a promise.",
    "It stops the function execution until a promise is resolved.",
    "It causes the function to run in a new thread."
    ]
 },
 {
    numb: 10,
    question: "What is the purpose of the Symbol data type in JavaScript?",
    answer: "To define hidden, non-enumerable properties on objects.",
    options: [
    "To generate random numbers.",
    "To create immutable variables.",
    "To store large integers.",
    "To define hidden, non-enumerable properties on objects"
    ]
 },
 {
    numb: 11,
    question: "Which of the following is true about the setTimeout() function?",
    answer: "It delays the execution of a function by a specified number of milliseconds.",
    options: [
    "It executes the function immediately.",
    "It repeats the function call at specified intervals.",
    "It delays the execution of a function by a specified number of milliseconds.",
    "It executes a function in a separate thread."
    ]
 },
 {
    numb: 12,
    question: "Which method is used to handle errors in promises?",
    answer: ".catch()",
    options: [ 
    ".then()",
    ".error()",
    ".finally()",
    ".catch()"
    ]
 },
 {
    numb: 13,
    question: "What is event delegation in JavaScript?",
    answer: "A pattern where a single event listener handles events for multiple elements.",
    options: [
    "A technique to prevent event propagation.",
    "A pattern where a single event listener handles events for multiple elements.",
    "A way to handle synchronous events.",
    "A method to optimize event binding."
    ]
 },
 {
    numb: 14,
    question: "How does Object.freeze() affect an object in JavaScript?",
    answer: "It makes the object immutable.",
    options: [ 
    "It makes the object immutable",
    "It locks the object to prevent new properties.",
    "It prevents properties from being updated",
    "It stops the object from being deleted."
    ]
 },
 {
    numb: 15,
    question: "What is the difference between == and === in JavaScript?",
    answer: "=== compares values and types, while == compares values only.",
    options: [
    "== compares values and types, while === compares values only.",
    "=== compares values and types, while == compares values only.",
    "They are both identical in functionality.",
    "=== is faster than ==."
    ]
 },
 {
    numb: 16,
    question: "What is the Temporal Dead Zone (TDZ) in JavaScript?",
    answer: "The period before a variable is declared when it cannot be accessed.",
    options: [
    "The time taken by the event loop to process a task.",
    "The time it takes for the garbage collector to run.",
    "The period before a variable is declared when it cannot be accessed.",
    "The duration for which a promise is pending."
    ]
 },
 {
    numb: 17,
    question: "What is the purpose of Object.assign() in JavaScript?",
    answer: "To copy properties from one or more source objects to a target object.",
    options: [
    "To merge arrays.",
    "To create deep clones of objects.",
    "To copy properties from one or more source objects to a target object.",
    "To compare objects."
    ]
 },
 {
    numb: 18,
    question: "How do you stop event propagation in JavaScript?",
    answer: "stopPropagation()",
    options: [
    "preventDefault()",
    "stopPropagation()",
    "stopEvent()",
    "halt()"
    ]
 },
 {
    numb: 19,
    question: "What is a generator function in JavaScript?",
    answer: "",
    options: [
    "A function that generates random numbers.",
    "A function that can return multiple values over time.",
    "A function that compiles other functions.",
    "A function that creates closures."
    ]
 },
 {
    numb: 20,
    question: "How do you define a default parameter in a JavaScript function?",
    answer: "By assigning a value in the parameter list.",
    options: [
    "By using || within the function body.",
    "By using && within the function body.",
    "By setting the value inside the function.",
    "By assigning a value in the parameter list."
    ]
 },
 {
    numb: 21,
    question: "What does Object.entries() do in JavaScript?",
    answer: "It returns an array of the object's own enumerable property [key, value] pairs.",
    options: [
    "It creates a new object from an array of key-value pairs.",
    "It returns an array of the object's own enumerable property [key, value] pairs.",
    "It returns an array of an object's keys.",
    "It returns a list of all objects in the current scope."
    ]
 },
 {
    numb: 22,
    question: "What is the purpose of async and await in JavaScript?",
    answer: "To execute asynchronous code in a synchronous manner",
    options: [
    "To improve the performance of promises.",
    "To handle callbacks.",
    "To execute asynchronous code in a synchronous manner",
    "To create generators."
    ]
 },
 {
    numb: 23,
    question: "How does requestAnimationFrame() differ from setTimeout()?",
    answer: "requestAnimationFrame() is optimized for animations and provides smoother updates.",
    options: [ 
    "requestAnimationFrame() is used for executing code after a delay.",
    "setTimeout() is used for creating animations.",
    "requestAnimationFrame() is optimized for animations and provides smoother updates.",
    "setTimeout() executes code on the next available frame."
    ]
 },
 {
    numb: 24,
    question: "Which of the following is true about undefined in JavaScript?",
    answer: "It is a primitive data type.",
    options: [
    "It is a primitive data type.",
    "It can be reassigned like other variables.",
    "It is automatically assigned to all variables.","it does not declare a constant array",
    "It is the same as null."
    ]
 },
 {
    numb: 25,
    question: "What is the purpose of the Proxy object in JavaScript?",
    answer: "To control access to an object.",
    options: [
    "To create a copy of an object.",
    "To control access to an object.",
    "To make an object immutable.",
    "To optimize memory usage."
    ]
 },
 {
    numb: 26,
    question: "What is the purpose of the Reflect API in JavaScript?",
    answer: "To intercept and define custom behavior for fundamental operations.",
    options: [
    "To intercept and define custom behavior for fundamental operations.",
    "To create immutable objects.",
    "To handle errors in asynchronous code.",
    "To execute a function in the global context."
    ]
 },
 {
    numb: 27,
    question: "Which of the following methods is used to combine two or more arrays?",
    answer: "Array.concat()",
    options: [
    "Array.push()",
    "Array.join()",
    "Array.concat()",
    "Array.splice()"
    ]
 },
 {
    numb: 28,
    question: "How does Array.prototype.reduce() function work?",
    answer: "It applies a function against an accumulator and each element to reduce it to a single value.",
    options: [
    "It reduces the size of the array.",
    "It applies a function against an accumulator and each element to reduce it to a single value.",
    "It concatenates all elements of the array into a string.",
    "It removes duplicate elements from an array."
    ]
 },
 {
    numb: 29,
    question: "What does the typeof operator return for an array in JavaScript?",
    answer: "'object'",
    options: [
    "'array'",
    "'object'",
    "'function'",
    "'list'"
    ]
 },
 {
    numb: 30,
    question: "What is the purpose of the WeakMap object in JavaScript?",
    answer: "To store key-value pairs, where keys are objects and values are weakly held.",
    options: [
    "To store key-value pairs, where keys are objects and values are weakly held.",
    "To store unique values of any type.",
    "To store key-value pairs with automatic sorting.",
    "To create immutable collections."
    ]
 },
 {
    numb: 31,
    question: "What does the Object.defineProperty() method do?",
    answer: "It adds a new property to an object or modifies an existing one.",
    options: [
    "It adds a new property to an object or modifies an existing one.",
    "It removes a property from an object.",
    "It seals the object to prevent adding new properties.",
    "It copies properties from one object to another."
    ]
 },        
 {
    numb: 32,
    question: "How do you implement a module in JavaScript using ES6 syntax?",
    answer: "By using import and export.",
    options: [
    "By using require and module.exports.",
    "By using import and export.",
    "By using include and export.",
    "By using include and define."
    ]
 },
 {
    numb: 33,
    question: "Which of the following is true about the Map object in JavaScript?",
    answer: "It maintains key-value pairs, where keys are unique.",
    options: [
    "It maintains key-value pairs, where keys are unique.",
    "It only accepts string keys.",
    "It automatically converts keys to strings",
    "It does not preserve the order of elements."
    ]
 },
 {
    numb: 34,
    question: "What is the purpose of the await keyword in JavaScript?",
    answer: "To pause the execution of an async function until a promise is resolved",
    options: [ 
    "To pause the execution of an async function until a promise is resolved",
    "To make a function asynchronous.",
    "To wait for a callback function to complete.",
    "To handle errors in promises."
    ]
 },
 {
    numb: 35,
    question: "Which of the following is a key difference between const and let?",
    answer: "const does not allow variable reassignment.",
    options: [
    "const allows variable reassignment.",
    "let does not allow variable reassignment.",
    "const is block-scoped, while let is function-scoped.",
    "const does not allow variable reassignment."
    ]
 },
 {
    numb: 36,
    question: "What does the finally block do in a try...catch statement?",
    answer: "Executes code after try and catch, regardless of the outcome.",
    options: [
    "Executes only if an error occurs.",
    "Executes code after try and catch, regardless of the outcome.",
    "Halts the execution of the program.",
     "Re-throws the error after catching it."
    ]
 },
 {
    numb: 37,
    question: "Which of the following is true about the `const` keyword",
    answer: "it declares a reference to the constant array",
    options: [
    "it declares a reference to the constant array",
    "it's value can be assigned more that once",
    "it declares a constant array",
    "none of these"
    ]
 },
 {
    numb: 38,
    question: "Which method is used to convert an object to a JSON string in JavaScript?",
    answer: "JSON.stringify()",
    options: [
    "JSON.parse()",
    "Object.toString()",
    "JSON.stringify()",
    "JSON.objectify()"
    ]
 },
 {
    numb: 39,
    question: "What is the primary difference between for...in and for...of loops?",
    answer: "for...in iterates over keys, while for...of iterates over values.",
    options: [
    "for...in iterates over values, while for...of iterates over keys.",
    "for...in iterates over keys, while for...of iterates over values.",
    "for...in is used for arrays, while for...of is used for objects.",
    "for...in does not iterate over inherited properties."
    ]
 },
 {
    numb: 40,
    question: "How do you deep clone an object in JavaScript?",
    answer: "Using JSON.stringify() and JSON.parse()",
    options: [
    "Using Object.assign()",
    "Using JSON.stringify() and JSON.parse()",
    "Using Object.clone()",
    "Using Array.slice()"
    ]
 },
 {
    numb: 41,
    question: "What is the purpose of the nullish coalescing operator (??) in JavaScript?",
    answer: "To return the first defined value in a chain of expressions.",
    options: [
    "To return the first truthy value in a chain of expressions.",
    "To return the first defined value in a chain of expressions.",
    "To compare two values for equality.",
    "To combine multiple conditions into one."
    ]
 },
 {
    numb: 42,
    question: "Which of the following is true about let and const",
    answer: "Both are block-scoped.",
    options: [
    "Both are block-scoped.",
    "Both allow variable reassignment.",
    "let is function-scoped, while const is block-scoped.",
    "const can be redeclared within the same scope."
    ]
 },
 {
    numb: 43,
    question: "What does the Array.prototype.map() method return?",
    answer: "A new array with the results of calling a function on every element in the calling array",
    options: [
    "A new array with the results of calling a function on every element in the calling array",
    "A boolean indicating whether an element is found.",
    "The first element that matches a condition.",
    "The original array after applying a transformation."
    ]
 },
 {
    numb: 44,
    question: "How does the Object.create() method work?",
    answer: "It creates a new object with the specified prototype object and properties.",
    options: [
    "It creates a new object and assigns it properties from another object.",
    "It creates a new object with the specified prototype object and properties.",
    "It merges two or more objects into a new object.",
    "It creates a new object with a default prototype."
    ]
 },
 {
    numb: 45,
    question: "Which of the following methods can be used to iterate over all properties of an object, including inherited ones?",
    answer: "",
    options: [
    "Object.keys()",
    "Object.values()",
    "for...in loop",
    "Object.entries()"
    ]
 },
 {
    numb: 46,
    question: "What is the purpose of the async keyword in JavaScript?",
    answer: "To indicate that a function always returns a promise.",
    options: [
    "To indicate that a function always returns a promise.",
    "To force a function to execute synchronously.",
    "To prevent a function from returning a promise.",
    "To make a function execute in a new thread."
    ]
 },
 {
    numb: 47,
    question: "Which of the following methods returns the keys of an object as an array?",
    answer: "Object.keys()",
    options: [
    "Object.values()",
    "Object.entries()",
    "Object.map()",
    "Object.keys()"
    ]
 },
 {
    numb: 48,
    question: "What is the difference between == and === in JavaScript?",
    answer: "== compares value only, while === compares both value and type.",
    options: [
    "== compares both value and type, while === compares value only.",
    "== compares value only, while === compares both value and type.",
    "=== is case-insensitive, while == is case-sensitive.",
    "There is no difference between == and ===."
    ]
 },
 {
    numb: 49,
    question: "How does Array.prototype.filter() function work?",
    answer: "",
    options: [
    "It modifies the original array.",
    "It creates a new array with all elements that pass the test implemented by the provided function.",
    "It removes elements from the original array.",
    "It returns the first element that matches the condition"
    ]
 },
 {     
 numb: 50,
    question: "Which of the following methods is used to check if an array includes a certain element?",
    answer: "Array.includes()",
    options: [
    "Array.includes()",
    "Array.find()",
    "Array.filter()",
    "Array.indexOf()"
    ]
 },
];
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");


start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); 
}


exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); 
}


continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.add("activeQuiz"); 
    showQuetions(0); 
    queCounter(1); 
    startTimer(15); 
    startTimerLine(0); 
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");


restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); 
    result_box.classList.remove("activeResult"); 
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); 
    queCounter(que_numb); 
clearInterval(counter); 
    clearInterval(counterLine); 
    startTimer(timeValue); 
    startTimerLine(widthValue);
    timeText.textContent = "Time Left"; 
    next_btn.classList.remove("show"); 
}


quit_quiz.onclick = ()=>{
    window.location.reload(); 
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");


next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; 
        que_numb++; 
        showQuetions(que_count); 
        queCounter(que_numb); 
        clearInterval(counter); 
        clearInterval(counterLine); 
        startTimer(timeValue); 
        startTimerLine(widthValue);
        timeText.textContent = "Time Left"; 
        next_btn.classList.remove("show"); 
    }else{
        clearInterval(counter); 
        clearInterval(counterLine); 
        showResult(); 
    }
}


function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; 
    option_list.innerHTML = option_tag; 
    
    const option = option_list.querySelectorAll(".option");

    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';


function optionSelected(answer){
    clearInterval(counter); 
    clearInterval(counterLine); 
    let userAns = answer.textContent;
    let correcAns = questions[que_count].answer; 
    const allOptions = option_list.children.length;  
    
    if(userAns == correcAns){ 
        userScore += 1; 
        answer.classList.add("correct"); 
        answer.insertAdjacentHTML("beforeend", tickIconTag); 
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); 
        answer.insertAdjacentHTML("beforeend", crossIconTag); 
        console.log("Wrong Answer");

for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){  
                option_list.children[i].setAttribute("class", "option correct"); 
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); 
    }
    next_btn.classList.add("show"); 
}

function showResult(){
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.remove("activeQuiz"); 
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ 
        
        let scoreTag = '<span>and congrats! , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  
    }
    else if(userScore > 1){ 
        let scoreTag = '<span>and nice , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ 
        let scoreTag = '<span>and sorry , You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; 
        time--; 
        if(time < 9){ 
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; 
        }
        if(time < 0){ 
            clearInterval(counter); 
            timeText.textContent = "Time Off"; 
            const allOptions = option_list.children.length; 
            let correcAns = questions[que_count].answer; 
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ 
                    option_list.children[i].setAttribute("class", "option correct"); 
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); 
            }
            next_btn.classList.add("show"); 
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; 
        time_line.style.width = time + "px"; 
        if(time > 549){ 
            clearInterval(counterLine); 
        }
    }
}

function queCounter(index){

    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag; 
}