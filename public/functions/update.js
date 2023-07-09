

// Variável para indicar se o modal está aberto
let isModalUpdateOpen = false;

// Captura o evento de clique no botão "Abrir Modal"
$('.openModalUpdateButton').on('click', function () {
  isModalUpdateOpen = true;
  
});

// Captura o evento de clique no botão "Cancelar" ou quando o modal é fechado
$('#cancelButton, .modalUpdate').on('click', function () {
    isModalUpdateOpen = false;
});
  
  
// Captura o evento de clique no documento
$('.openModalUpdateButton').one('click', function (event) {

  const id = $(this).data('id')
  console.log(id)
  const updateModal = $('#ModalTarefa-'+id); // Seletor do modal
  const formUpdate = $('#formUpdate-'+id); // Seletor do formulário
  

  $('#ModalTarefa-'+id).on('click', function (event) {

    const titleUpdate = formUpdate.find('#titleUpdate').val();
    const contentUpdate = formUpdate.find('#contentUpdate').val();
     
    console.log(isModalUpdateOpen)
    console.log(formUpdate.find('#titleUpdate').val())
    console.log(updateModal.is(event.target))
    console.log(updateModal.has(event.target).length)


    // Verifica se o clique ocorreu fora do modal e se o formulário possui dados preenchidos
    if (isModalUpdateOpen && updateModal.is(event.target)) {
      
      
      console.log('Entrou na atualização')
      //event.preventDefault(); // Impede o comportamento padrão de fechar o modal  

      // Envia a solicitação POST para a rota de armazenamento
      $.ajax({
        url: `/edit/${id}`,
        type: 'put',
        data: {
          title: titleUpdate,
          content: contentUpdate
        },
        success: function (response) {
          console.log(response); // Manipule a resposta recebida aqui

            // Limpar o formulário
            formUpdate[0].reset();

         
  
            // Atualize a listagem de itens no DOM com os dados atualizados
            atualizarLista()
        },
        error: function (error) {
          console.error(error); // Manipule o erro aqui
        }
      });
    }

    $(this).one('click', function() {
      return false; // ou faça qualquer outra ação necessária
    });
  })
     
});

    

   

     
    
    



   
  
      

