let numArray = [];
let numElement = parseInt(prompt("Quanti elementi vuoi inserire nell'array? (max 100)"));
let numPrint = parseInt(prompt("Quanti elementi vuoi stampare?"));

for (let i = 0; i < numElement; i++) {
    numArray.push(getRndInteger(1, 100));
}
console.log(numArray);
console.log(numArray.slice(-numPrint));