



// link - > https://www.codewars.com/kata/5388f0e00b24c5635e000fc6
// level 8 kye 
function swapValues() {
    const args = arguments["0"];
    const temp = args[0];
    args[0] = args[1];
    args[1] = temp;
    return args;
}
// console.log(swapValues([1,2])); // [2, 1]


// link --> https://www.codewars.com/kata/5464cbfb1e0c08e9b3000b3e/train/javascript
// level 6 kye
function isHappy(n) {
    let numbers = new Set();
    let currentNumber = n;
    const getNextNumber = (number) => {
        const isInNumbers = numbers.has(number);
        if (isInNumbers) return false;
        numbers.add(number);
        const digits = number.toString().split("");
        const nextNumber = digits.map(i => i ** 2).reduce((acc, curr) => acc + curr, 0);
        currentNumber = nextNumber;
        if (currentNumber === 1) return true;
        return "run"
    }
    while (true) {
        const result = getNextNumber(currentNumber);
        if(result == true) return true;
        if(result == false) return false;
    }
}
// console.log(isHappy(3))
