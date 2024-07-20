//sum using functions
function sum(x,y){
    s=x+y;
    return s;
}

let add = sum(5,9);
console.log( "Addition is :",add);


//count numbers of vowels in js

function countVowels(string){
    let count=0;

    for(let char of string){
        if(char==="a" || char==="e" || char ==="i" || char==="o" || char==="u"){
            count++;
        }
    }
    console.log(count);
}


//using map to print all the values

let numb=[10,20,30,40,50];

numb.map((val) =>{
    console.log(val);
});


//printing even array number

let arr=[1,2,3,4,5,6,7,8,9,10];

let evenArr=arr.filter((val)=>{
    return val%2===0;
});
console.log(evenArr);

//find number greater than 90
let arr1=[80,99,98,723,91,90];

 let topper=arr1.filter((val)=>{
    return val>90 & val<100;
});
console.log(topper);

//take input from user and print the number that user has entered

let n1=prompt("Enter the number :");

 let arr2 = [];

for(let i=1; i<=n1; i++){
    arr2[i-1]=i;
}
console.log(arr2);