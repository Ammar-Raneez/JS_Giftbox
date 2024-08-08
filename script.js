let currentIndex = 0;
const messageElement = document.getElementById("message");

document.getElementById("gift-box").addEventListener("click", openGift);

function openGift() {
  const giftBox = document.getElementById("gift-box");
  const explosion = document.getElementById("explosion");

  explosion.style.display = "block";

  const container = document.querySelector(".fireworks");
  const fireworks = new Fireworks.default(container);
  fireworks.start();

  setTimeout(() => {
    giftBox.style.display = "none";
    explosion.style.display = "none";
    messageElement.style.display = "block";

    showMessagesSequentially();
  }, 600);
}

function showMessagesSequentially() {
  displayMessage(messages[currentIndex]);

  const interval = setInterval(() => {
    messageElement.classList.remove("fade-in");
    messageElement.classList.add("fade-out");

    setTimeout(() => {
      currentIndex++;
      if (currentIndex < messages.length) {
        displayMessage(messages[currentIndex]);
      } else {
        clearInterval(interval);
      }
    }, 500);
  }, 2500);
}

function displayMessage(message) {
  messageElement.innerHTML = message;
  messageElement.classList.remove("fade-out");
  messageElement.classList.add("fade-in");
}
