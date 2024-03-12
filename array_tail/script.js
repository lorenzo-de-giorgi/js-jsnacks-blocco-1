let btn = document.getElementById('print');
btn.addEventListener('click', function(){
    let numArray = [];
    let numElementInput = document.getElementById('arrayelement').value;
    let printElementInput = document.getElementById('printelement').value;
    for (let i = 0; i < numElementInput; i++) {
        numArray.push(getRndInteger(1, 100));
    }
    let completeArray = document.getElementById('complete-array');
    let lastElement = document.getElementById('last-element');
    completeArray.innerHTML = `Array completa: <br> ${numArray}`
    lastElement.innerHTML = `Array completa: <br> ${numArray.slice(-printElementInput)}`
})
