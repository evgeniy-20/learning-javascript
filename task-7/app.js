const generationRandomNumber = () => {
    const secretInput = document.getElementById('secret');
    const number = Math.floor(Math.random() * 9);
    secretInput.innerHTML = number;
}