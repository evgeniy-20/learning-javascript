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
    node.innerHTML = numberValue1 + calckSum();
    const sum1 = Number(node)
    resultList.appendChild(sum1);
}
const calckSum = (number) => {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum = sum + Number(number[i]);
    }
    return sum;
}

