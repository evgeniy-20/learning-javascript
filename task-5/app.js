const greetByName = () => {
    const nameInput = document.getElementById("name")
    const numberInput = document.getElementById("number")
    const elementInput = document.getElementById("element")
    const sum = calculateSum;
    element.innerHTML = sum;
    elementInput.innerHTML = sum;
    numberInput.innerHTML = sum;
}
const calculateSum = (nameInput, numberInput) => {
    const numElement1 = document.getElementById("number1");
    const numElement2 = document.getElementById("number2");
    const numberValue1 = numElement1.value;
    const numberValue2 = numElement2.value;
    const sum = numberValue1 + numberValue2; 
    result.innerHTML = sum;
}
