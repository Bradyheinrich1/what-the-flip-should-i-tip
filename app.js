const billInput = document.getElementById('billInput');
const serviceInput = document.getElementById('serviceInput');
const peopleInput = document.getElementById('peopleInput');

const tipBtn = document.getElementById('tipBtn');

const tipOutput = document.getElementById('tipOutput');

tipBtn.addEventListener('click', tipCalculation);

function tipCalculation() {
    let cost = Number(billInput.value);
    let service = Number(serviceInput.value);
    let people = Number(peopleInput.value);

    let tipTotal = (cost * service) / people;

    if (people == 0) {
        document.getElementById('tipOutput').innerHTML = 'Make sure to put how many dined!';
    } else if (cost <= 0) {
        document.getElementById('tipOutput').innerHTML = 'That bill price does not seem right!';
    } else if (service === 1) {
        document.getElementById('tipOutput').innerHTML = 'Be sure to select your service quality!';
    } else if (people === 1) {
        document.getElementById('tipOutput').innerHTML = 'You should tip ' + '$' + tipTotal.toFixed();
    } else {
        document.getElementById('tipOutput').innerHTML = 'You should tip ' + '$' + tipTotal.toFixed() + ' each!';
    }

}
