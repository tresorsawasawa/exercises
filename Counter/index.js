// function increment() {
//     console.log("the button was clicked")}
//console.log()
// let lap1 = 45;
// let lap2 = 39;
// let lap3 = 29;

// function logLapTime() {
// logLapTime = lap1 + lap2 + lap3;
// console.log(logLapTime)
// }
// logLapTime()

// let lapCompleted = 0;

// function incrementlap() {
//     lapCompleted = lapCompleted + 1;
// }
// incrementlap()
// incrementlap()
// incrementlap()

// console.log(lapCompleted);

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el");
let count = 0;

console.log(saveEl);

 function increment() {
        count += 1;
        countEl.textContent = count
        console.log(count);
 }

function save() {
    let countStr = count +" - "
    saveEl.textContent += countStr;
    console.log(count);
    countEl.textContent = 0;
    count = 0;
}
