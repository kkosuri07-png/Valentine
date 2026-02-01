// 1️⃣ Background music - play on first click anywhere
document.body.addEventListener("click", function playMusicOnce() {
    const bgMusic = document.getElementById("bg-music");
    bgMusic.play(); // start music
    document.body.removeEventListener("click", playMusicOnce); // only once
});

// 2️⃣ Yes button - go to yes_page.html
function handleYesClick() {
    window.location.href = "yes_page.html";
}

// 3️⃣ No button hover effect
const noBtn = document.querySelector(".no-button");
const heading = document.querySelector("h1");

const emojis = ["😏", "😂", "😜", "🙈", "🤭", "💃"];
let emojiIndex = 0;

const nopeSound = new Audio("engineer_no01"); // make sure this file exists

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    heading.textContent = `Nice try ${emojis[emojiIndex]} 💘`;
    emojiIndex = (emojiIndex + 1) % emojis.length;

    nopeSound.currentTime = 0;
    nopeSound.play();
});
