const getRandomNumber = () => {
    const number = Math.floor(Math.random() * 9);
    return number;
}
const getRandomSecret = () => {
    const arrayOfNumbers = [];
    while(arrayOfNumbers.length < 4) {
        const randomNumber = getRandomNumber();
        const result = arrayOfNumbers.includes(randomNumber);
        if(result === false) {
            arrayOfNumbers.push(randomNumber);
        }
    }
    return arrayOfNumbers;
}
const displaySecret = () => {
    const secretInput = document.getElementById('secret');
    const numbers = getRandomSecret();
    secretInput.innerHTML = numbers;
    const numbers1 = secretInput.innerHTML;
    const a = numbers1;
}
const сheckSecret = () => {
    const numElement1 = document.getElementById("number1");
    const resultList = document.getElementById("result")
    const numberValue1 = numElement1.value 
    if(numberValue1.length != 4) {
        alert("Пожалуйста введите 4 цифры")
    } else {
        const node = document.createElement("li"); 
        const sumOfNumbers = calcSum(numberValue1);
        node.innerHTML = numberValue1 + ' ' + sumOfNumbers;
        resultList.appendChild(node);
        if(numberValue1 === displaySecret()) {
            numberValue1 = numberValue1 + displaySecret();
        } else {
            numberValue1 != numberValue1 + displaySecret();
        }
    }
}
const calcSum = (numberValue1) => {
    let sum = 0;
    for (let i = 0; i < numberValue1.length; i++) {
        sum = sum + Number(numberValue1[i]);
    }
    return sum;
}
