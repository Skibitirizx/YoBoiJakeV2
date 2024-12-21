document.addEventListener("DOMContentLoaded", () => {
  const games = document.querySelectorAll(".game");
  const gameOverlay = document.getElementById("game-overlay");
  const gameFrame = document.getElementById("game-frame");
  const exitButton = document.getElementById("exit-btn");
  const fullscreenButton = document.getElementById("fullscreen-btn");
  const gameButtons = document.getElementById("game-buttons");

  // Open a game
  games.forEach(game => {
    game.addEventListener("click", () => {
      const gameUrl = game.getAttribute("data-url");
      gameFrame.src = gameUrl;
      gameOverlay.classList.remove("hidden");
      gameButtons.classList.remove("hidden");
    });
  });

  // Exit game
  exitButton.addEventListener("click", () => {
    gameFrame.src = "";
    gameOverlay.classList.add("hidden");
    gameButtons.classList.add("hidden");
  });

  // Fullscreen mode
  fullscreenButton.addEventListener("click", () => {
    document.body.classList.add("fullscreen");
  });

  // Exit fullscreen when pressing escape
  window.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      document.body.classList.remove("fullscreen");
    }
  });
});
