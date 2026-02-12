let form = document.getElementById("signupForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let race = document.getElementById("race").value;
    let playerClass = document.getElementById("class").value;
    let level = document.getElementById("level").value;
    let backstory = document.getElementById("backstory").value;

    let style = document.querySelector('input[name="style"]:checked').value;

    let userData = {
        name: username,
        email: email,
        race: race,
        class: playerClass,
        level: level,
        playStyle: style,
        backstory: backstory
    };

    let userDataString = JSON.stringify(userData);

    localStorage.setItem("guildMember", userDataString);

    document.getElementById("message").textContent =
        "Welcome to the guild, " + username + "!";

    form.reset();
});