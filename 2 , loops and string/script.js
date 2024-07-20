for(let count=1; count<=10 ; count++){
    console.log("Hi i am HOme");
}

console.log("Exit loop");

//sum of numbers 
let sum=0;
for(let i=1; i<=5 ;i++){
    sum=sum+i;
}
console.log("sum = " ,sum ) ;

//printing value of i 

for(let i=1; i<=5 ;i++){
    console.log("i=", i); 
}

//even no 

for( let i=2; i<=100; i++){
    if(i%2 ==0){
        console.log("Even ",i);
    }
    
}

//strings
let str = "Motorola";
console.log(str[0]);
console.log(str[1]);

//
let obj ={
    phone:"moto",
    price:"10k",
}
console.log("The phone is" ,obj.phone,"and price is:",obj.price);

//
let a="hello";
let b=a.toUpperCase();
console.log(b);
