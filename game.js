let playerXScore = 0;
let playerOScore = 0;
let coins = 0;

function updateScoreboard() {
  document.getElementById("score").innerText =
    `Player X: ${playerXScore} | Player O: ${playerOScore} | Coins: ${coins}`;
}

function cellClick(e) {
  const index = e.target.dataset.index;

  if (gameState[index] !== "" || !gameActive) return;

  gameState[index] = currentPlayer;
  e.target.innerText = currentPlayer;

  if (checkWin()) {
    statusText.innerText = `Player ${currentPlayer} Wins 🎉`;

    if (currentPlayer === "X") playerXScore++;
    else playerOScore++;

    coins += 10; // earn 10 coins per win
    updateScoreboard();

    gameActive = false;
    return;
  }

  if (!gameState.includes("")) {
    statusText.innerText = "It's a Draw 🤝";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.innerText = `Player ${currentPlayer}'s turn`;
}

function restartGame() {
  currentPlayer = "X";
  gameActive = true;
  gameState = ["", "", "", "", "", "", "", "", ""];
  statusText.innerText = "Player X's turn";
  createBoard();
  updateScoreboard();
}

createBoard();
updateScoreboard(); 
