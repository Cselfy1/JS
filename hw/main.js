
function Task1() {
    let name = prompt("Enter your name: ");
    alert("Hi! " + name + "!");
}

function Task2() {
    let userBirthYear = +prompt("Enter your birth year: ");
    const currentYear = 2024;
    let userAge = currentYear - userBirthYear;
    alert("You are " + userAge + " years old.");
}

function Task3() {
    let squareSide = +prompt("Enter the side of the square: ");
    let squarePerimeter = 4 * squareSide;
    alert("The perimeter of square is: " + squarePerimeter + " cm.");
}

function Task4() {
    let radius = +prompt("Enter the radius of the circle: ");
    let circleArea = 3.14 * radius * radius;
    alert("Area of the circle is: " + circleArea + " cm^2.");
}

function Task5() {
    let distance = +prompt("Enter the distance between two cities (in km): ");
    let time = +prompt("Enter your desired time to reach your destination (in hours): ");
    let speed = distance / time; 
    alert("You should travel at " + Math.round(speed) + " km/h to reach your destination on time."); // 55.555555...
}

function Task6() {
    const exchangeRate = 0.92;
    let dollars = +prompt("Enter the amount of $: ");
    let result = dollars * exchangeRate; 
    alert(dollars + " $" + " = " + result.toFixed(2) + " €"); //92.01
}

function Task7() {
    const fSize = 820; 
    let usb = +prompt("Enter your USB flash drive space in GB: ");
    let usbMB = usb * 1024; 
    let result = usbMB / fSize; 
    alert("You will be able to store: " + Math.floor(result) + " files on your USB flash drive");
}

