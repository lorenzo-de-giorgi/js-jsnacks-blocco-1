let fridge = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
let pesca = fridge.push('pesca');
let result = document.getElementById('cocomero-result');
let checkButton = document.getElementById('check-cocomero');
checkButton.addEventListener('click', function(){
    if (fridge.indexOf('cocomero') !== -1) {
        result.innerHTML = 'Trovato! Devo solo preparare il cocktail.';
    } else {
        result.innerHTML = 'Oh no, devo uscire a comprare il cocomero!';
    }
})
