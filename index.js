function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}


let base = prompt("Enter the base number:");
let exponent = prompt("Enter the exponent:");
base = parseInt(base);
exponent = parseInt(exponent);
let result = power(base, exponent);
console.log(base + " raised to the power of " + exponent + " is " + result + ".");
