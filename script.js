const installButton = document.document.getElementById('pwa-install');
const statusText = document.document.getElementById('pwa-status');

let installPrompt = null;
installButton.style.display = 'none';

window.addEventListener('beforeinstallprompt', (prompt) => {
    installPrompt = prompt;
    installButton.style.display = 'block';
    installButton.addEventListener('click', (e) => {
        installButton.style.display = 'none';
        installPrompt.prompt();
        installPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                statusText.innerHTML += ' User accepted installation.';
            } else {
                statusText.innerHTML += ' User refused installation.';
            }
            deferredPrompt = null;
        });
    });
});

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register("serviceworker.js").then(function() {
        statusText.innerHTML += " Service worker is enabled."
  });
}
