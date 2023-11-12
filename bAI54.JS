function calculate_Max() {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const num3 = parseFloat(document.getElementById("number3").value);

    const max = Math.max(num1, num2, num3);

    document.getElementById("result").textContent = ` ${max}`;
}

function calculate_Min() {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const num3 = parseFloat(document.getElementById("number3").value);

    const min = Math.min(num1, num2, num3);

    document.getElementById("result").textContent = ` ${min}`;
}

function calculate_Sin() {
    const num1 = parseFloat(document.getElementById("number1").value);

    const sinValue = Math.sin(num1);

    document.getElementById("result").textContent = ` ${sinValue}`;
}

function calculate_Cos() {
    const num1 = parseFloat(document.getElementById("number1").value);

    const cosValue = Math.cos(num1);

    document.getElementById("result").textContent = ` ${cosValue}`;}

function calculate_ab() {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);

    const powValue = Math.pow(num1, num2);

    document.getElementById("result").textContent = ` ${powValue}`;}
