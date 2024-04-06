// COUNTER

const decreaseBt=document.getElementById("decreaseBt");
const increaseBt=document.getElementById("increaseBt");
const resetBt=document.getElementById("resetBt");

const counterLabel =document.getElementById("counterLabel");

let count =0;

increaseBt.onclick=function () {
    count++;
    counterLabel.textContent=count;


}
decreaseBt.onclick=function () {
    count--;
    counterLabel.textContent=count;


}
resetBt.onclick=function () {
    count=0;
    counterLabel.textContent=count;


}

