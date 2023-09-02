let displayValue = '';

function numbers(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clr() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function Equals() {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } 

