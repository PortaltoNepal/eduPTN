// Try using right-click on the preview page. This script disables that functionality.
window.addEventListener('contextmenu', function (e) {
  document.body.innerHTML += '<p>Right-click is disabled</p>'
  e.preventDefault();
}, false);