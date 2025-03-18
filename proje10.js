const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
    const button = document.createElement("button");
    const body = document.querySelector("body");
    body.appendChild(button);
    button.classList.add("buttons");
    button.innerText = sound;

    button.addEventListener("click", () => {
        stopSongs();
        document.getElementById(sound).play();
    });
});

function stopSongs() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}
