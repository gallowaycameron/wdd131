const form = document.getElementById("charForm");
const container = document.getElementById("charContainer");
const pointsRemainingEl = document.getElementById("pointsRemaining");

const basePoints = 27;

const pointCost = {
    8: 0,
    9: 1,
    10: 2,
    11: 3,
    12: 4,
    13: 5,
    14: 7,
    15: 9
};

let saved = JSON.parse(localStorage.getItem("characters"));
if (!saved) {
    saved = [];
}

for (let i = 0; i < saved.length; i++) {
    renderCharacter(saved[i]);
}

const statInputs = document.querySelectorAll(".stats input");
for (let i = 0; i < statInputs.length; i++) {
    statInputs[i].addEventListener("input", updatePoints);
}

function updatePoints() {
    const str = parseInt(document.getElementById("str").value);
    const dex = parseInt(document.getElementById("dex").value);
    const con = parseInt(document.getElementById("con").value);
    const int = parseInt(document.getElementById("int").value);
    const wis = parseInt(document.getElementById("wis").value);
    const cha = parseInt(document.getElementById("cha").value);

    let cost = 0;
    cost += pointCost[str];
    cost += pointCost[dex];
    cost += pointCost[con];
    cost += pointCost[int];
    cost += pointCost[wis];
    cost += pointCost[cha];

    const pointsRemaining = basePoints - cost;
    pointsRemainingEl.textContent = pointsRemaining;

    document.querySelector("button[type='submit']").disabled = pointsRemaining < 0;
}

updatePoints();

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const points = parseInt(pointsRemainingEl.textContent);
    if (points < 0) {
        alert("You used too many points!");
        return;
    }

    const character = {
        id: Date.now(),
        name: document.getElementById("name").value,
        race: document.getElementById("race").value,
        class: document.getElementById("class").value,
        stats: {
            STR: parseInt(document.getElementById("str").value),
            DEX: parseInt(document.getElementById("dex").value),
            CON: parseInt(document.getElementById("con").value),
            INT: parseInt(document.getElementById("int").value),
            WIS: parseInt(document.getElementById("wis").value),
            CHA: parseInt(document.getElementById("cha").value)
        }
    };

    saved.push(character);

    localStorage.setItem("characters", JSON.stringify(saved));

    renderCharacter(character);

    form.reset();
    updatePoints();
});

function renderCharacter(char) {
    const card = document.createElement("div");
    card.className = "charCard";

    card.innerHTML =
        "<h3>" + char.name + "</h3>" +
        "<p>" + char.race + " - " + char.class + "</p>" +
        "<p>STR: " + char.stats.STR + " | DEX: " + char.stats.DEX + " | CON: " + char.stats.CON + "</p>" +
        "<p>INT: " + char.stats.INT + " | WIS: " + char.stats.WIS + " | CHA: " + char.stats.CHA + "</p>" +
        "<button class='deleteBtn'>Delete</button>";

    const deleteBtn = card.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", function () {
        deleteCharacter(char.id, card);
    });

    container.appendChild(card);
}

function deleteCharacter(id, cardElement) {
    for (let i = 0; i < saved.length; i++) {
        if (saved[i].id === id) {
            saved.splice(i, 1);
            break;
        }
    }

    localStorage.setItem("characters", JSON.stringify(saved));

    cardElement.remove();
}