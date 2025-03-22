function displayNum(){
    let num = document.getElementById("input").value;
    let text = document.getElementById("showResult");
    text.innerHTML= `You entered: ${num}`;
}

function sum(){
    let num1 = parseFloat(document.getElementById("sum1").value);
    let num2 = parseFloat(document.getElementById("sum2").value);
    let sum = num1 + num2;
    let result = document.getElementById("sumResult");
    result.innerHTML = `The sum is : ${sum}`;
}
function excute(){
    let inp1 = parseFloat(document.getElementById("inp1").value);
    let inp2 = parseFloat(document.getElementById("inp2").value);
    let result = document.getElementById("ssum");
    result.innerHTML = `Sum = ${inp1 + inp2}  Sub = ${inp1 - inp2}`;
}
 