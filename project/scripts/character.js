var form = document.getElementById("charForm");
var container = document.getElementById("charContainer");

var saved = localStorage.getItem("characters");

if (saved) {
    saved = JSON.parse(saved);
} else {
    saved = [];
}

for (var i = 0; i < saved.length; i++) {
    renderCharacter(saved[i]);
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    var character = {
        id: Date.now(),
        name: document.getElementById("name").value,
        race: document.getElementById("race").value,
        class: document.getElementById("class").value,
        stats: {
            STR: document.getElementById("str").value,
            DEX: document.getElementById("dex").value,
            CON: document.getElementById("con").value,
            INT: document.getElementById("int").value,
            WIS: document.getElementById("wis").value,
            CHA: document.getElementById("cha").value
        }
    };

    saved.push(character);

    localStorage.setItem("characters", JSON.stringify(saved));

    renderCharacter(character);

    form.reset();
});

function renderCharacter(character) {
    var card = document.createElement("div");
    card.className = "charCard";

    card.innerHTML =
        "<h3>" + character.name + "</h3>" +
        "<p>" + character.race + " - " + character.class + "</p>" +
        "<p>STR: " + character.stats.STR +
        " | DEX: " + character.stats.DEX +
        " | CON: " + character.stats.CON + "</p>" +
        "<p>INT: " + character.stats.INT +
        " | WIS: " + character.stats.WIS +
        " | CHA: " + character.stats.CHA + "</p>" +
        "<button>Delete</button>";

    var deleteBtn = card.querySelector("button");
    deleteBtn.addEventListener("click", function () {
        deleteCharacter(character.id, card);
    });

    container.appendChild(card);
}

function deleteCharacter(id, cardElement) {

    for (var i = 0; i < saved.length; i++) {
        if (saved[i].id === id) {
            saved.splice(i, 1);
            break;
        }
    }

    localStorage.setItem("characters", JSON.stringify(saved));

    cardElement.remove();
}