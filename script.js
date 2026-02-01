function handleYesClick() {
  window.location.href = "yes_page.html";
}

const noBtn = document.querySelector(".no-button");
const heading = document.querySelector("h1");

const emojis = ["😏", "😂", "😜", "🙈", "🤭", "💃"];
let emojiIndex = 0;

const nopeSound = new Audio("engineer_no01");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  heading.textContent = `Nice try ${emojis[emojiIndex]} 💘`;
  emojiIndex = (emojiIndex + 1) % emojis.length;

  nopeSound.currentTime = 0;
  nopeSound.play();
});
