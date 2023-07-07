// Captura o evento de envio do formulário
/*$('#formAdd').on('submit', function (event) {
    event.preventDefault();
    alert('Olá mundo')
  
    const title = $('#title').val();
    const content = $('#content').val();
  
    // Envia a solicitação POST para a rota de armazenamento
    $.ajax({
      url: '/save',
      type: 'POST',
      data: {
        title: title,
        content: content
      },
      success: function (response) {
        console.log(response); // Manipule a resposta recebida aqui
  
        // Atualize a listagem de itens no DOM com os dados atualizados
        // Você pode usar o response.tasks para obter a lista de tarefas atualizada

        atualizarLista()
      },
      error: function (error) {
        console.error(error); // Manipule o erro aqui
      }
    });
  });*/


  
// Captura o evento de clique no documento
$(document).on('click', function (event) {
    const modal = $('.ModalAdiciona'); // Seletor do modal
    const form = $('#formAdd'); // Seletor do formulário
  
    // Verifica se o clique ocorreu fora do modal e se o formulário possui dados preenchidos
    if (!modal.is(event.target) && modal.has(event.target).length === 0 && form.has(':input').length) {
        const title = $('#title').val();
        const content = $('#content').val();
  
      // Envia a solicitação POST para a rota de armazenamento
      $.ajax({
        url: '/save',
        type: 'POST',
        data: {
          title: title,
          content: content
        },
        success: function (response) {
          console.log(response); // Manipule a resposta recebida aqui
  
          // Atualize a listagem de itens no DOM com os dados atualizados
          // Você pode usar o response.tasks para obter a lista de tarefas atualizada
        },
        error: function (error) {
          console.error(error); // Manipule o erro aqui
        }
      });
    }
});
  