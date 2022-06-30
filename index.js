/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el");
let btnEl = document.getElementById("btn-el");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

const meterToFeet = 3.281;
const litreToGallon = 0.264;
const kilogramToPound = 2.204;

btnEl.addEventListener("click", function () {
  let baseValue = parseFloat(inputEl.value).toFixed(3);

  lengthEl.textContent = `${baseValue} meters = 
  ${(baseValue * meterToFeet).toFixed(3)} feet | 
  ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters`;

  volumeEl.textContent = `${baseValue} litres = 
  ${(baseValue * litreToGallon).toFixed(3)} gallons | 
  ${baseValue} gallons = ${(baseValue / litreToGallon).toFixed(3)} litres`;

  massEl.textContent = `${baseValue} kilos = 
  ${(baseValue * kilogramToPound).toFixed(3)} pounds | 
  ${baseValue} pounds = ${(baseValue / kilogramToPound).toFixed(3)} kilos`;
});
