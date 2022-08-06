
let n=5
let result=0
//Sum of 5*5+3*3+1*1

for(a=n; a>=1; a=a-2){
    //a=a-2 -> a needs to be stored back into variable after operation
    result=result+a*a
}

console.log(result)