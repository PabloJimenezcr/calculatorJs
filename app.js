const numOne = document.querySelector('.numOne');
const numTwo = document.querySelector('.numTwo');
const sumBtn = document.querySelector('.sumBtn');
const subtractionBtn = document.querySelector('.subtractionBtn');
const multiplicationBtn = document.querySelector('.multiplicationBtn');
const divisionBtn = document.querySelector('.divisionBtn');
const printTotal = document.querySelector('.printTotal');







function sum() {
    let numberOne = Number(numOne.value);
    let numberTwo = Number(numTwo.value);
    if (numberOne == '' && numberTwo == '') {
        Swal.fire({
            icon: 'error',
            text: 'Uno de los campos esta vacío',
        });
        return false;
    } else {
        let suma = numberOne + numberTwo;
        printTotal.textContent = suma;
        printTotal.classList.add('printTotalP');
        resetCalculator();
    }
}


function subtraction() {
    let numberOne = Number(numOne.value);
    let numberTwo = Number(numTwo.value);
    if (numberOne == '' && numberTwo == '') {
        Swal.fire({
            icon: 'error',
            text: 'Uno de los campos esta vacío',
        });
        return false;
    } else {
        let subtractionOperartion = numberOne - numberTwo;
        printTotal.textContent = subtractionOperartion;
        printTotal.classList.add('printTotalP');
        resetCalculator();
    }
}

function multiplication() {
    let numberOne = Number(numOne.value);
    let numberTwo = Number(numTwo.value);
    if (numberOne == '' && numberTwo == '') {
        Swal.fire({
            icon: 'error',
            text: 'Uno de los campos esta vacío',
        });
        return false;
    } else {
        let multiplicationOperartion = numberOne * numberTwo;
        printTotal.textContent = multiplicationOperartion;
        printTotal.classList.add('printTotalP');
        resetCalculator();
    }
}

function division() {
    let numberOne = Number(numOne.value);
    let numberTwo = Number(numTwo.value);
    if (numberOne == '' && numberTwo == '') {
        Swal.fire({
            icon: 'error',
            text: 'Uno de los campos esta vacío',
        });
        return false;
    } else {
        let divisionOperartion = numberOne / numberTwo;
        printTotal.textContent = divisionOperartion;
        printTotal.classList.add('printTotalP');
        resetCalculator();
    }
}
function resetCalculator() {
    numOne.value = '';
    numTwo.value = '';
}

sumBtn.addEventListener('click', sum);
subtractionBtn.addEventListener('click', subtraction);
multiplicationBtn.addEventListener('click', multiplication);
divisionBtn.addEventListener('click', division);









