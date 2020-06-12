const greetByName = () => {
    const nameInput = document.getElementById("name")
    const numberInput = document.getElementById("number")
    const elementInput = document.getElementById("element")
    const sum = nameInput.value + numberInput.value;
    element.innerHTML = sum;
    elementInput.innerHTML = sum;
    numberInput.innerHTML = sum;
}