const leterCount = (word) => {
    let sum = 0;
    for(let i = 0; i < word.length; i++) {
        if(word[i] != " ") {
            sum = sum + 1;
        }
    }
    return sum;
}
console.log(leterCount('Женя дурак!!!'));