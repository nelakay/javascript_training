Javascript is a programming language which can work with/without browser. In the browser mode, Javascript is supported by browsers to perform various operations. 

When used without browser, we will need node.js to run the Javascript code. 

When run on browser, Javascript contains additional objects which are related to browsers. The programming part of Javascript remains the same in both modes. 

To run a Javascript code without the browser, we have to use the console and node.js.
In the console, cd enters a directory (or folder) 

Javascript will make use of variables to store data. 
Javascript is losely typed programming language. This means, the same variable can hold different data types. 

Console: comand pwd shows current directory with breadcrumbs 
Comand ls-l shows files in current directory

Javascript can perform basic mathematical operations using + - * / % symbols

Variables can be defined as constant (const), but it can only be defined once, the value cannot be changed. 

In programming, you need to make decisions. These decisions are supported with the help of if-else-loops. 
If loop has a condition. If the condition is true, then the statement is executed. If the condition is false, then the else loop will be executed. 

If statements can have nested if-else staments to handle multiple conditions. 
Mark of student
If the mark is between 80-100, grade is A
If the mark is between 60-80, grade is B
If the mark is between 40-60, grace is C
Bellow 40, grade is D

&& adds a second condition to narrow down the conditional statement. 

Repetitive loops: there are two types of repetitive loops: 
- while
- for
While loops keeps on repeating again and again until the condition is false. 

++ increases the value by 1. 
-- decreases the value by 1. 

One of the alternatives of while loops are for loops. For loops have 3 parts:
1. Initialization
2. Condition
3. Increment or Decrement

Find factorial of a given number 
3 factorial is 3*2*1

n=3
i=n

i=n; i>=1: i--

i = 3-2-1-0
let result= 1-3-6-6

for(i=n; i>=1; i--){
    result = result*i
}



n=5
5+4+3+2+1


n=3
Total of 3*3+2*2+1*1

a=3 - 2 - 1
result=0 - 9 - 13 - 

for(a=n; a>=1; a--){
    result=result+a*a
}



n=3
Sum of 3*3*3+2*2*2+1*1*1


let n=3 - 2 - 1
let result=0 - 27 - 35 - 36

for(a=n; a>=1; a--){
    result=result+a*a*a
}



n=5
Sum of 5*5+3*3+1*1


let n=5
let result=0
//Sum of 5*5+3*3+1*1

for(a=n; a>=1; a=a-2){
    result=result+a*a
}

console.log(result)



n=3
Sum of 1+2+3

let n=3 
let result=0

for(a=1; a<=3; a++){
    result=result+a
}

console.log(result)

Forms elements are elements which can be used to take input from user. Most of the form elements follow the input tag. 
Two buttons are associated with the form element: Submit and reset 
Submit: sends the data collected from the form to the server. 
Reset: clears form and erases all data
Validation: HTML5 provides variaty of validations involving length and number of characters entered, as well as requirement of fields. 
Dropdown is also a form element, which allows user to select one or more predefined values. Also allows multiple choice by adding multiple attribute (user has to hold shift/cmd)
Radio button is a input field that allows users to select only one of the given choices. 
Checkboxes allow the user to select more than one value
Each form input field requires a name attribute to be sent to the server.