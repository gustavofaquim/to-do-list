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
        console.error(error); 
      }
    });
  });