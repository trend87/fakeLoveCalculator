let yourName = prompt("Please enter your name: ")
let partnersName = prompt("Please enter partners name: ")


function loveCalculator(yourNAme, partnersName){

    let loveCalc = Math.random()
    loveCalc = Math.floor((loveCalc *  100) + 1)
    return loveCalc
  
    }
   
    let loveMeter = loveCalculator (yourName, partnersName)
    alert("Your compatibility ratio is " + loveMeter + "%")