console.log("DOM")

let obj=
{
    1: "red",
    2: "aqua",
    3: "blue",
    4: "pink",
    5: "green",
    6: "yellow",
    7: "orange",
}

let random = Math.floor(Math.random()*7)+1
let random2 = Math.floor(Math.random()*7)+1
// console.log(random)



document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = obj[random];
}) 

document.querySelectorAll(".box").forEach(e =>{
    e.style.color = obj[random2];
}) 

console.log(document.querySelectorAll(".box"))