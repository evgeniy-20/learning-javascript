const generationRandomNumber = () => {
    const scrietsInput = document.getElementById('scriets');
    const number = Math.floor(Math.random() * 9);
    number.innerHTML = scrietsInput;
}