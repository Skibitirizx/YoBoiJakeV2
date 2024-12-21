function openAboutBlank() {
  const content = document.documentElement.outerHTML;
  const newTab = window.open('about:blank', '_blank');
  newTab.document.open();
  newTab.document.write(content);
  newTab.document.close();
}

"use strict";
function showGame(gameUrl) {
  let destination = gameUrl;

  try {
    destination = new URL(gameUrl).toString();
  } catch (err) {
    alert(`Bad URL. Got error:\n${err}`);
    throw err;
  }

  registerSW()
    .then(() => {
      window.open(
        __uv$config.prefix + __uv$config.encodeUrl(destination),
        "_self"
      );
    })
    .catch((err) => {
      alert(`Encountered error:\n${err}`);
    });
}

function exitGame() {
  // Hide the game display
  document.getElementById('game-display').style.display = 'none';

  // Show the game selection screen again
  document.getElementById('game-container').style.display = 'flex';
}

function toggleFullScreen() {
  const gameFrame = document.getElementById('game-frame');
  
  if (!document.fullscreenElement) {
    gameFrame.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
