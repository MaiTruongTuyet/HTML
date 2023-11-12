--BAI_54
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

-- BAI_55
function solveQuadratic() {
    const a = parseFloat(document.getElementById("numbera").value);
    const b = parseFloat(document.getElementById("numberb").value);
    const c = parseFloat(document.getElementById("numberc").value);
    const discriminant = b * b - 4 * a * c;
    
    if (discriminant > 0) {
        // Trường hợp hai nghiệm phân biệt
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        document.getElementById("result").textContent = `Có hai nghiệm x1 ${x1} và x2 ${x2}`;
        return [x1, x2];
       
    } else if (discriminant === 0) {
        // Một nghiệm kép
        const x = -b / (2 * a);
        document.getElementById("result").textContent = `Có 1 nghiệm kép x1=x2=${x}`;
        return [x];
    } else {
        // Không có nghiệm thực
        document.getElementById("result").textContent = `Không có nghiệm`;
        return [];
    }
}
function reloadPage() {
    location.reload();
}

--BAI58
function score(){
    let A = document.getElementById("score1").value;
    let P = document.getElementById("score2").value;
    let G = document.getElementById("score3").value;
    let AP = document.getElementById("score4").value;
    let R = document.getElementById("score5").value;
    let arr = [A,P,G,AP,R];
    for (let i = 0; i < arr.length; i++) {
        let kq = arr[i];
        if (kq < 0 || kq > 2) {
            alert('Vui lòng nhập trong khoảng từ 0 đến 2');
            return false; 
        }}

    }
function auto() {
    let today = new Date();
    let month = today.getMonth() + 1;
    let date = today.getDate() + '/' + month + '/' + today.getFullYear();
    document.getElementById("dateTime").innerHTML = date;
    }
