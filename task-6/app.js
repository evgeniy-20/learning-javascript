const calculateSum = () => {
    const numElement1 = document.getElementById("number1");
    const numElement2 = document.getElementById("number2");
    const numberValue1 = numElement1.value;
    const numberValue2 = numElement2.value;
    const sum = Number(numberValue1) + Number(numberValue2); 
    const resultList = document.getElementById("result")
    const node = document.createElement("li"); 
    node.innerHTML = sum;
    resultList.appendChild(node);
}