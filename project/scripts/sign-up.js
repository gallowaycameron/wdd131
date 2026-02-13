let form = document.getElementById("signupForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let race = document.getElementById("race").value;
    let playerClass = document.getElementById("class").value;
    let level = document.getElementById("level").value;
    let backstory = document.getElementById("backstory").value;
    let styleInput = document.querySelector('input[name="style"]:checked');
    let style = styleInput ? styleInput.value : "Not specified";

    let userData = {
        name: name,
        email: email,
        username: username,
        race: race,
        class: playerClass,
        level: level,
        playStyle: style,
        backstory: backstory
    };

    localStorage.setItem("guildMember", JSON.stringify(userData));

    window.location.href = "confirmation.html";
});