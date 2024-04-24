const dice1 = document.querySelector('.dice1');
const dice2 = document.querySelector('.dice2');
const btnRoll = document.getElementById('btn-roll');

let knockoutNumber = parseInt(prompt("Välj din knockout-siffra (6, 7, 8 eller 9): "));
while (![6, 7, 8, 9].includes(knockoutNumber))
    knockoutNumber = parseInt(prompt("Ogiltigt val. Välj din knockout-siffra (6, 7, 8 eller 9): "));
let totalScore = 0;

document.getElementById('btn-roll').addEventListener('click', function () {
    btnRoll.disabled = true;
    RollDice();
});

const RollDice = () => {
    // Animerar tärningarna
    if (!dice1.classList.contains('animation'))
        dice1.classList.add('animation')

    if (!dice2.classList.contains('animation'))
        dice2.classList.add('animation')

    setTimeout(() => {
        // Ger slumpmässiga värden till tärningarna
        let d1 = GetDice();
        let d2 = GetDice();
        // sätt tärningarna till slumpmässiga värden
        document.querySelector('.dice1').src = `img/dice-${d1}.png`;
        document.querySelector('.dice2').src = `img/dice-${d2}.png`;

        let sum = d1 + d2;
        totalScore += sum; // Lägger till rundans summa till totalen
        document.getElementById('dice-sum').innerText = totalScore;

        // Kontrollera om spelaren förlorar
        if (sum === knockoutNumber) {
            console.log("Du förlorade! Din totalsumma var lika med knockout-siffran: " + knockoutNumber);
            let tryAgain = confirm("Du förlorade! Vill du försöka igen?");
            if (tryAgain) {
                RestartGame(); // Anropa funktionen för att starta om spelet
            } else {
                btnRoll.disabled = true; // Inaktivera kastknappen om spelaren inte vill fortsätta
            }
        }

        // Ta bort animationen efter 2 sekunder
        if (dice1.classList.contains('animation'))
            dice1.classList.remove('animation')

        if (dice2.classList.contains('animation'))
            dice2.classList.remove('animation')

        btnRoll.disabled = false;
    }, 2000);
}

// Funktion för att starta om spelet
const RestartGame = () => {
    totalScore = 0; // Återställ totalScore till 0
    document.getElementById('dice-sum').innerText = totalScore; // Uppdatera totalsumman på sidan
    btnRoll.disabled = false; // Aktivera kastknappen
}

// Generera slumpmässig tärning
function GetDice() {
    return Math.ceil(Math.random() * 6); // 1-6
}
