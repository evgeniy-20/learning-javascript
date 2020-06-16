const calculateSum = () => {
    const numElement1 = document.getElementById("number1");
    const numElement2 = document.getElementById("number2");
    const resultElement = document.getElementById("result");
    const numberValue1 = numElement1.value;
    const numberValue2 = numElement2.value;
    const sum = Number(numberValue1) + Number(numberValue2); 
    resultElement.innerHTML = sum;
    const perents = document.getElementById("result-todo");
    const li = document.createElement('li');
    perents.appendChild(li)
}
