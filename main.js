function getTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}


let age = prompt("Enter your age:");
age = parseInt(age);
let price = getTicketPrice(age);
console.log("The ticket price is $" + price + ".");
