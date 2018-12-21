const installButton = document.querySelector('.install');

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
                console.log('User accepted installation');
            } else {
                console.log('user not accepted installation');
            }
            deferredPrompt = null;
        });
    });
});

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register("serviceworker.js").then(function() {
        alert('Service Worker Registered'); 
  });
}
