let rollButton = document.getElementById("roll");
let resultParagraph = document.getElementById("result");

rollButton.addEventListener("click", function () {
    let diceValue = document.getElementById("dice").value;
    let quantityValue = document.getElementById("quantity").value;

    let dice = Number(diceValue);
    let quantity = Number(quantityValue);

    if (quantity === 0) {
        resultParagraph.textContent = "You rolled 0 dice.";
        return;
    }

    let rolls = "";
    let total = 0;

    for (let i = 0; i < quantity; i++) {
        let randomNumber = Math.floor(Math.random() * dice) + 1;

        total = total + randomNumber;
        rolls = rolls + randomNumber;

        if (i < quantity - 1) {
            rolls = rolls + ", ";
        }
    }

    resultParagraph.textContent = "Rolls: " + rolls + " | Total: " + total;
});