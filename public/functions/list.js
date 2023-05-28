

function atualizarListagem(){
    fetch('/', {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)

    })
    .catch(error => {
        // Lidar com erros de solicitação
        console.error(error);
      });
}