
// 500kg te koto kg hoi
function getKg(kg){
    const mon = 40;
    const total = kg / mon
    return [total, "Kg"]
}

const result = getKg(500)
console.log(result);

// year leap
function isLeepYear(year){
    if(year % 4 == 0){
        console.log("This year is leep year.")
    }else{
        console.log('This is year is not leep year.');
    }
}
isLeepYear(2024)

// celcius to farenheit
function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  return cToFahr
}

// farenheit to celcius
function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  
  return fToCel
} 
console.log("celcius to farenheit" ,cToF(60));
console.log("farenheit to celcius",fToC(45) );


// Check Even or odd
const number = 2;
//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}
// if the number is odd
else {
    console.log("The number is odd.");
}


// inch to feet 

function inputInch(inches){
    const feet = inches / 12;
    return feet
}
console.log(inputInch(2), "Feet");


// km to mile
function convertKmToMiles(km) {
    return km * 0.621371;
  }

console.log(convertKmToMiles(1), "Miles")











