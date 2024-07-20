let btn1 = document.querySelector("#battan");

// btn1.onclick = () =>{
//     console.log("battan bada diya bhai Ne")
//     let a=20;
//     a++;
//     console.log(a);
//     console.log("le badh gyi value 20 ki 21");
// };

//event listner
// btn1.addEventListener("click",(evt) =>{
//     console.log("button dab gya");
//     console.log(evt);
//     console.log(evt.type);

// })

let modeBtn = document.querySelector("#mode");

let currmode = "light";

modeBtn.addEventListener("click", () => {
  if (currmode === "light") {
    currmode = "dark";
    document.querySelector("body").style.backgroundColor = "grey";
  } else {
    currmode = "light";
    document.querySelector("body").style.backgroundColor = "white";
  }
  console.log(currmode);
});
