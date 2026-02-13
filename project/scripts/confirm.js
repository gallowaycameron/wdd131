let userDataString = localStorage.getItem("guildMember");
const confirmationDiv = document.getElementById("confirmationMessage");

if (userDataString) {
    let user = JSON.parse(userDataString);
    confirmationDiv.innerHTML = `
        <p>Adventurer <strong>${user.name}</strong> has successfully joined the guild!</p>
        <ul>
            <li>Character Name: ${user.username}</li>
            <li>Race: ${user.race}</li>
            <li>Class: ${user.class}</li>
            <li>Level: ${user.level}</li>
            <li>Play Style: ${user.playStyle}</li>
            <li>Backstory: ${user.backstory}</li>
        </ul>
    `;
} else {
    confirmationDiv.textContent = "No submission data found. Please sign up first.";
}