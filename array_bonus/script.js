let btnDifference = document.getElementById('difference');

btnDifference.addEventListener('click', function() {
    let firstArray = [];
    let secondArray = [];
    let firstarrayValue = document.getElementById('firstarray').value;
    let secondarrayValue = document.getElementById('secondarray').value;
    // random first array
    for(let i = 0; i < firstarrayValue; i++){
        let randomfirstArray = getRndInteger(1, 100);
        firstArray.push(randomfirstArray);
        let firstRandom = document.getElementById('firstElementArray');
        firstRandom.innerHTML = `First Array Value: <br>${firstArray}`;
    }
    // random second array
    for(let i = 0; i < secondarrayValue; i++){
        let randomsecondArray = getRndInteger(1, 100);
        secondArray.push(randomsecondArray)
        let secondRandom = document.getElementById('secondElementArray');
        secondRandom.innerHTML = `Second Array Value: <br>${secondArray}`;
    }
    let diff = firstArray.length - secondArray.length;
    let diff2 = secondArray.length - firstArray.length;
    // confronto
    if(firstArray.length > secondArray.length){
        for(let i = 0; i < diff; i++){
            let random = getRndInteger(1, 100);
            secondArray.push(random)
            let differentSection = document.getElementById('differenceElement');
            differentSection.innerHTML = `Ecco la seconda array corretta ora ha la stessa lunghezza della prima: <br>${secondArray}`
        }
    } else if(secondArray.length > firstArray.length){
        for(let i = 0; i < diff2; i++){
            let random = getRndInteger(1, 100);
            firstArray.push(random)
            let differentSection = document.getElementById('differenceElement');
            differentSection.innerHTML = `Ecco la seconda array corretta ora ha la stessa lunghezza della prima: <br>${firstArray}`
        }
    } else if(secondArray.length == firstArray.length){
        let differentSection = document.getElementById('differenceElement');
        differentSection.innerHTML = `Le due array hanno la stessa lunghezza!`
    }
    
})
