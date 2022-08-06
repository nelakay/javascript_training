//If the mark is between 80-100, grade is A
//If the mark is between 60-80, grade is B
//If the mark is between 40-60, grace is C
//Bellow 40, grade is D

let mark=62
let grade=""

if(mark>=80 && mark<=100){
    grade='A'
}
else if(mark>=60 && mark<80){
    grade='B'
}
else if(mark>=40 && mark<60){
    grade='C'
}
else{
    grade='D'
}

console.log(grade)