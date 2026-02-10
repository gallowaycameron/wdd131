let characters = [];

function loadCharacters() {
    const saved = localStorage.getItem("characters");
    if (saved) {
        characters = JSON.parse(saved);
        displayCharacters();
    }
}

function saveCharacters() {
    localStorage.setItem("characters", JSON.stringify(characters));
}

function addCharacter(name, race, charClass) {
    const character = { name, race, class: charClass };
    characters.push(character);
    saveCharacters();
}

function displayCharacters() {
    const container = document.getElementById("charContainer");
    container.innerHTML = "";

    characters.forEach((char, index) => {
        const charCard = document.createElement("div");
        charCard.className = "char-card";

        charCard.innerHTML = `
            <h3>${char.name}</h3>
            <p>Race: ${char.race}</p>
            <p>Class: ${char.class}</p>
            <button onclick="removeCharacter(${index})">Remove</button>
        `;

        container.appendChild(charCard);
    });
}

function removeCharacter(index) {
    characters.splice(index, 1);
    saveCharacters();
    displayCharacters();
}

document.getElementById("charForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const race = document.getElementById("race").value;
    const charClass = document.getElementById("class").value;

    addCharacter(name, race, charClass);

    displayCharacters();
    document.getElementById("charForm").reset();
});

loadCharacters();