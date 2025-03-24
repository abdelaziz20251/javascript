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
    result.innerHTML = `Sum = ${inp1 + inp2}  |  Sub = ${inp1 - inp2} | Mult = ${inp1 * inp2} | Div = ${inp1 / inp2} | Mod = ${inp1 % inp2}`;
}
function area(){
    let inp1 = parseFloat(document.getElementById("length").value);
    let inp2 = parseFloat(document.getElementById("width").value);
    let result = document.getElementById("carea");
    result.innerHTML = `The area of the Rectangle Is = ${inp1 * inp2}`;
}
function cCircle(){
    const pi = 3.14159;
    let radius = parseFloat(document.getElementById("radius").value);
    let diameter = radius * 2;
    let result = document.getElementById("ccirlce");
    result.innerHTML = `The Diameter Is = ${diameter} | The Circumference Is = ${2 * pi * radius} | The Area Is = ${pi * radius * radius}`;  
}
function cTemp(){
    let celsius = parseFloat(document.getElementById("celsius").value);
    let fahrenheit = celsius * 9/5 + 32;
    let result = document.getElementById("ctemp");
    result.innerHTML = `The Celsius Tempreature Is  ${fahrenheit} F`;
}
function cTempf(){
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    let celsius = fahrenheit - 32 * 5/9;
    let result = document.getElementById("ctempf");
    result.innerHTML = `The Celsius Tempreature Is  ${celsius} C`;
}
function cYears(){
    let days = parseFloat(document.getElementById("days").value);
    let year = parseInt(days / 365);
    let months = parseInt((days % 365) / 30);
    const week = parseInt((days % 365) / 7);
    const day = parseInt((days % 365) % 7);
    let result = document.getElementById("cyears");
    result.innerHTML = `Years ${year} | Month = ${months} | Weeks = ${week} | Days = ${day}`;
}
function power(){
    let inp1 = parseFloat(document.getElementById("base").value);
    let inp2 = parseFloat(document.getElementById("expo").value);
    let result = document.getElementById("power");
    result.innerHTML = `The result of ${inp1}^${inp2} = ${inp1 ** inp2}`;
}



