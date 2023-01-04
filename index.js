/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convertButton")
const inputField = document.getElementById("inputField")
const lengthParagraph = document.getElementById("lengthParagraph")
const volumeParagraph = document.getElementById("volumeParagraph")
const massParagraph = document.getElementById("massParagraph")

// let conversionNum = Number(inputField.value)
// console.log(conversionNum)

convertBtn.addEventListener("click", function() { 
    const conversionNum = Number(inputField.value)
    convert(conversionNum)
    console.log(conversionNum)
})

function convert(num) {
    showLengthConversion(num)
    showVolumeConversion(num)
    showMassConversion(num)
    conversionNum = 0
    inputField.value = ""
}

function showLengthConversion(num) {
    const feetConversion = (num * 3.281).toFixed(3)
    const meterConversion = (num / 3.281).toFixed(3)
    lengthParagraph.textContent = `${num} meters = ${feetConversion} feet | ${num} feet = ${meterConversion} meters`
}

function showVolumeConversion(num) {
    const litreConversion = (num / 0.264).toFixed(3)
    const gallonConversion = (num * 0.264).toFixed(3)
    volumeParagraph.textContent = `${num} litres = ${gallonConversion} gallons | ${num} gallons = ${litreConversion} litres`
}

function showMassConversion(num) {
    const poundConversion = (num * 2.204).toFixed(3)
    const KiloConversion = (num / 2.204).toFixed(3)
    massParagraph.textContent = `${num} kilos = ${poundConversion} pounds | ${num} pounds = ${KiloConversion} kilos`
}