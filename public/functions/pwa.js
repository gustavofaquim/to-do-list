
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

