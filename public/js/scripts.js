function openAboutBlank() {
  const content = document.documentElement.outerHTML;
  const newTab = window.open('about:blank', '_blank');
  newTab.document.open();
  newTab.document.write(content);
  newTab.document.close();
}
function showGame(gameUrl, gameTitle) {
  
  document.getElementById('game-container').style.display = 'none';

  const gameFrame = document.getElementById('game-frame');
  gameFrame.src = gameUrl;

  document.getElementById('game-display').style.display = 'block';
  document.getElementById('game-frame-container').style.maxWidth = '800px'; 
}

function exitGame() {

  document.getElementById('game-display').style.display = 'none';

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
