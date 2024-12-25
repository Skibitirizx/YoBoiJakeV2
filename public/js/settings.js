// Load saved settings on page load
window.onload = function () {
  const savedPanicKey = localStorage.getItem('panicKey');
  const savedTextColor = localStorage.getItem('textColor');
  const savedBorderColor = localStorage.getItem('borderColor');
  const savedBackgroundColor = localStorage.getItem('backgroundColor');

  // Apply saved panic key if it exists
  if (savedPanicKey) {
    document.getElementById('panic-key-input') && (document.getElementById('panic-key-input').value = savedPanicKey);
  }

  // Apply saved customizations if they exist
  if (savedTextColor) {
    document.body.style.color = savedTextColor;
  }
  if (savedBorderColor) {
    const containers = document.querySelectorAll('.panic-key-container, .customization-container');
    containers.forEach(container => {
      container.style.borderColor = savedBorderColor;
    });
  }
  if (savedBackgroundColor) {
    document.body.style.backgroundColor = savedBackgroundColor;
  }
};

// Save settings when the user changes them
function savePanicKey() {
  const panicKey = document.getElementById('panic-key-input').value.toUpperCase();
  localStorage.setItem('panicKey', panicKey);
}

function saveTextColor(color) {
  localStorage.setItem('textColor', color);
  document.body.style.color = color;
}

function saveBorderColor(color) {
  localStorage.setItem('borderColor', color);
  const containers = document.querySelectorAll('.panic-key-container, .customization-container');
  containers.forEach(container => {
    container.style.borderColor = color;
  });
}

function saveBackgroundColor(color) {
  localStorage.setItem('backgroundColor', color);
  document.body.style.backgroundColor = color;
}

// Listen for input changes and save the settings
document.addEventListener('DOMContentLoaded', function () {
  const panicKeyInput = document.getElementById('panic-key-input');
  if (panicKeyInput) {
    panicKeyInput.addEventListener('input', savePanicKey);
  }

  const textColorInput = document.getElementById('text-color');
  if (textColorInput) {
    textColorInput.addEventListener('input', function () {
      saveTextColor(textColorInput.value);
    });
  }

  const borderColorInput = document.getElementById('border-color');
  if (borderColorInput) {
    borderColorInput.addEventListener('input', function () {
      saveBorderColor(borderColorInput.value);
    });
  }

  const backgroundColorInput = document.getElementById('background-color');
  if (backgroundColorInput) {
    backgroundColorInput.addEventListener('input', function () {
      saveBackgroundColor(backgroundColorInput.value);
    });
  }
});

// Panic key functionality (works across all pages)
document.addEventListener('keydown', function (e) {
  const panicKey = localStorage.getItem('panicKey');
  if (panicKey && e.key.toUpperCase() === panicKey) {
    window.location.href = 'https://classroom.google.com';
  }
});
