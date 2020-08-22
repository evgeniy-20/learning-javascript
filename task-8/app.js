const getRandomNumber = () => {
    const number = Math.floor(Math.random() * 9);
    return number;
}
const getRandomSecret = () => {
    const arrayOfNumbers = [];
    for(let i = 0; i < 4; i++) {
        const randomNumber = getRandomNumber();
        arrayOfNumbers.push(randomNumber);
    }
    return arrayOfNumbers;
}
const displaySecret = () => {
    const secretInput = document.getElementById('secret');
    const numbers = getRandomSecret();
    secretInput.innerHTML = numbers;
}
