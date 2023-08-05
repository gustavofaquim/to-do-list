
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/')
      .then(registration => {
        console.log('Service Worker registrado com sucesso:', registration);
      })
      .catch(error => {
        console.error('Falha ao registrar o Service Worker:', error);
      });
  });
}

// Dentro do seu arquivo JavaScript principal (script.js)
const toggleFullscreen = () => {
const appElement = document.documentElement;

if (!document.fullscreenElement) {
    appElement.requestFullscreen()
    .catch(err => {
        console.log(`Erro ao entrar no modo de tela cheia: ${err.message}`);
    });
} else {
    if (document.exitFullscreen) {
    document.exitFullscreen();
    }
}
};

// Chame a função quando desejar ativar a tela cheia, por exemplo, em um botão
document.getElementById('fullscreen-button').addEventListener('click', toggleFullscreen);


// Dentro do seu arquivo JavaScript principal (script.js)
document.addEventListener('DOMContentLoaded', () => {
    const downloadMessage = document.getElementById('download-message');
    const closeMessageButton = document.getElementById('close-message-button');
  
    closeMessageButton.addEventListener('click', () => {
      downloadMessage.style.display = 'none';
    });
  
    // Exiba a mensagem de download quando o PWA for acessado pela primeira vez
    if (!localStorage.getItem('downloadMessageShown')) {
      downloadMessage.style.display = 'block';
      localStorage.setItem('downloadMessageShown', 'true');
    }
  });
