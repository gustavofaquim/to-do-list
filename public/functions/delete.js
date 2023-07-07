/*document.querySelectorAll(".btn-remove").forEach( function(button) {
    
    button.addEventListener("click", function(event) {

    const el = event.target;

    const id = el.id;

    console.log(id);

    fetch('/remove', {
        method: 'POST',
        body: JSON.stringify(id),
        headers: {
            'Content-Type': 'application/json'
          }
    })
    //.then(response => response.json())
    .then(data => {
        $('#lista-dados').html(data.html);  
    })
    .catch(error => {
        console.error(error);
    })

    // Chamada inicial para atualizar a lista de dados
    atualizarLista()

  });
  
});*/



// Captura o evento de exclusão
$(document).on('click', '.delete-button', function () {
    let fileId = $(this).data('id'); // ID do arquivo a ser excluído

    console.log(fileId);
  
    // Envia a solicitação DELETE para a rota de exclusão
    $.ajax({
      url: `/remove/${fileId}`,
      type: 'DELETE',
      success: function (response) {
        console.log(response); // Manipule a resposta recebida aqui
        // Atualize a listagem de itens no DOM
        atualizarLista()
      },
      error: function (error) {
        console.error(error); // Manipule o erro aqui
      }
    });
  });