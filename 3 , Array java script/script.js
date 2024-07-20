
// console.log(marks);
// console.log( "length is :",marks.length );



// //
// let names =["Amit" , "sumit", "aman", "amosh"]
// console.log(names);

//
// let a=prompt("enter marks :");
// if(a>10){
//     console.log("pass");
// }
// else{
//     console.log("fail");
// }
// console.log("your marks  out of 10 is  :",a);

//
let array=[1,2,3,4,5,6,7,8,9];
for(let i=0; i<array.length ; i++){
    console.log(array[i]);
}

//offer on itmes

let items=[200, 400, 600, 800 ];

let i=0;
for(let val of items){
    let offer = val /10;

    items[i] = items[i] - offer;
    console.log(`value after offer =${items[i]}`);
    i++;
}
 
//push ,pop
let arms=["pistol" , "bullets"];
console.log(arms);



//slicee in js
let marvel=["ironman" , "HUlk", "caption", "hawkie"];
console.log(marvel);

console.log(marvel.slice(1,3));

//companies
let companies = ["bloomberg","Microsoft","Uber","Google","IBM", "Netflix"];

companies.shift();//remove first element of array from js

companies.splice(2,1,"Ola");

//To add element in the end of array 
companies.push("Amazon");