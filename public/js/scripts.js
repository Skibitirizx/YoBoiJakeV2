  var url = "/";
  var win;

  function openAboutBlank() {
      if (win) {
          win.focus();
      } else {
          win = window.open('', '_blank');
          win.document.body.style.margin = '0';
          win.document.body.style.height = '100vh';
          var iframe = win.document.createElement('iframe');
          iframe.style.border = 'none';
          iframe.style.width = '100%';
          iframe.style.height = '100%';
          iframe.src = url;
          win.document.body.appendChild(iframe);
      }
  }

  document.addEventListener('DOMContentLoaded', function() {
      var switchInput = document.querySelector('about-blank-btn');

      switchInput.addEventListener('change', function() {
          if (this.checked) {
              openAboutBlank();
          }
      });
  });

function showGame(gameUrl, gameTitle) {
  
  document.getElementById('game-container').style.display = 'none';

  const gameFrame = document.getElementById('game-frame');
  gameFrame.src = gameUrl;

  document.getElementById('game-display').style.display = 'block';
  document.getElementById('game-frame-container').style.maxWidth = '800px'; 
}

function exitGame() {
  // Redirect back to the games page
  window.location.href = '/games.html'; // Adjust the path if necessary
}


function toggleFullScreen() {
  const gameFrame = document.getElementById('game-frame');
  
  if (!document.fullscreenElement) {
    gameFrame.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
