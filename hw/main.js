// 1 
// let name = prompt("Enter your name: ");
// alert("Hi! " + name + "!");

// 2    
// let userBirthYear = +prompt("Enter your birth year: ");
// const currentYear = 2024;
// let userAge = currentYear - userBirthYear;
// alert("You are " + userAge + " years old.");

// 3
// let squareSide = +prompt("Enter the side of the square: ");
// let squarePerimeter = 4 * squareSide;
// alert("The perimeter of square is: " + squarePerimeter + " cm.");

// 4
// let radius = +prompt("Enter the radius of the circle: ");
// let circleArea = 3.14 * radius * radius;
// alert("Area of the circle is: " + circleArea + " cm^2.");

// 5
// let distance = +prompt("Enter the distance between two cities (in km): ");
// let time = +prompt("Enter your desired time to reach your destination (in hours): ");
// let speed = distance / time; 
// alert("You should travel at " + Math.round(speed) + " km/h to reach your destination on time."); // Math.round() 56.5555555....

// 6
// const exchangeRate = 0.92;
// let dollars = +prompt("Enter the amount of $: ");
// let result = dollars * exchangeRate; 
// alert(dollars + " $" + " = " + result.toFixed(2) + " €"); // 115.25...

// 7 
const fSize = 820;
let usb = +prompt("Enter your USB flash drive space: ");
let usbMB = usb * 1024; 
let result = usbMB / fSize; 
alert("You will be able to fit: " + Math.floor(result) + " files on your usb flash drive");