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
}
const сheckSecret = () => {
    const numElement1 = document.getElementById("number1");
    const resultList = document.getElementById("result")
    const numberValue1 = numElement1.value;
    const node = document.createElement("li"); 
    const sum1 = calckSum(numberValue1);
    node.innerHTML = sum1;
    resultList.appendChild(node);
}
const calckSum = (numberValue1) => {
    let sum = 0;
    for (let i = 0; i < numberValue1.length; i++) {
        sum = sum + Number(numberValue1[i]);
    }
    return sum;
}
