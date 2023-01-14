document.querySelector(".roll").addEventListener("click", () => {
  let randomNumber1 = Math.floor(Math.random() * 6 + 1);
  let randomNumber2 = Math.floor(Math.random() * 6 + 1);

  document
    .querySelector(".img1")
    .setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document
    .querySelector(".img2")
    .setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "It's a Tie";
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
  } else {
    document.querySelector("h1").textContent = "Player 2 Wins!";
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "r") {
    let randomNumber1 = Math.floor(Math.random() * 6 + 1);
    let randomNumber2 = Math.floor(Math.random() * 6 + 1);

    document
      .querySelector(".img1")
      .setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document
      .querySelector(".img2")
      .setAttribute("src", "images/dice" + randomNumber2 + ".png");

    if (randomNumber1 === randomNumber2) {
      document.querySelector("h1").textContent = "It's a Tie";
    } else if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").textContent = "Player 1 Wins!";
    } else {
      document.querySelector("h1").textContent = "Player 2 Wins!";
    }
  }
});
