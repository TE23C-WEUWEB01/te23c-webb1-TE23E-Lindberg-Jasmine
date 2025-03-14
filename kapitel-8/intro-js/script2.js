// alert("glädjens dag, det är fredag");

// var namn = prompt("vad heter du?");
// var ålder = prompt("hur gammal är du");

// alert(" hej " + namn + " du är " + ålder + "år gammal ");


// console.log("Det varkar funka det här");

// be användaren mata in 2 tal och skriv ut summan

// var tal1 = prompt("skriv in ett tal"); //läser som en string
// var tal2 = prompt("skriv in ett annat tal"); //läser som en string
// var summa = parseInt(tal1) + parseInt(tal2);

// alert(" summan är " + summa);

// Be användaren att mata sin ålder 
// odh skriv ut ålder på studenten

// var ålder = prompt("skriv in din ålder");
// var summa = parseInt(ålder) + 1;
// //  alert("Du är " + summa + " när du tar studenten");

// document.writeln(" <h2> Du är " + summa + " år när du tar studenten");

var slumptal1 = Math.floor(Math.random() * 100);
var slumptal2 = Math.floor(Math.random() * 100);
var summa = slumptal1 + slumptal2;
console.log(slumptal1), (slumptal2);


var gissning = prompt("vad är summan av " + slumptal1 + " + " + slumptal2 + " ? ");
if (gissning == summa) {
    document.writeln("<h1> good job</h1>");
}

else {
    document.writeln("<h1>sucker</h1>");
}