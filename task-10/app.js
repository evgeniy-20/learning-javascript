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
