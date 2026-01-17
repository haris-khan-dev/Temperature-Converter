let button = document.querySelector('button');

let input = document.querySelector('input');

let fromUnit = document.getElementById('from-unit');

let toUnit = document.getElementById('to-unit');

let answer = document.getElementById('answer');

button.addEventListener("click", function(){
    let result = 0;
    if(fromUnit.value == 'Fahrenheit' && toUnit.value == 'Celseus')
        result = (input.value - 32) * 5/9;
    else if(fromUnit.value == 'Celseus' && toUnit.value == 'Fahrenheit')
        result = (input.value * 9/5) + 32;
    else if(fromUnit.value == 'Celseus' && toUnit.value == 'Kelvin')
        result = input.value + 273.15;
    else if(fromUnit.value == 'Kelvin' && toUnit.value == 'Celseus')
        result = input.value - 273.15;
    else if(fromUnit.value == 'Fahrenheit' && toUnit.value == 'Kelvin')
        result = (input.value - 32) * 5/9 + 273.15
    else if(fromUnit.value == 'Kelvin' && toUnit.value == 'Fahrenheit')
        result = (input.value - 273.15) * 9/5 + 32;
    answer.innerHTML = `${input.value} ${fromUnit.value} is ${result} ${toUnit.value}`;
});


// logic for temp converter

// formula fahrenheit to celseus
// C = (F - 32) × 5/9

// formula for celsius to fahrenheit
// F = (C × 9/5) + 32

// formula for celsius to Kelvin
// K = C + 273.15

// formula for Kelvin to Celsius
// C = K - 273.15

// formula for fahrenheit to Kelvin
// K = (F - 32) x 5/9 + 273.15

// formula for Kelvin to fahrenheit
// F = (K - 273.15) x 9/5 + 32
