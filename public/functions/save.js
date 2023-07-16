
// Variável para indicar se o modal está aberto
let isModalOpen = false;

// Captura o evento de clique no botão "Abrir Modal"
$('#btnModalSave').on('click', function () {
  isModalOpen = true;
  
});

// Captura o evento de clique no botão "Cancelar" ou quando o modal é fechado
$('#cancelButton, .modal').on('click', function () {
  isModalOpen = false;
});

// Variável para armazenar a cor selecionada
let color = '';
  
$('.color').on('click', function() {
  color = $(this).val();
  color = JSON.parse(color);

  $('.modal-content').removeClass().addClass('modal-content modal-tarefa color-' + color.name);
});
  
// Captura o evento de clique no documento
$(document).on('click', function (event) {
  
    const modal = $('.modal'); // Seletor do modal
    const form = $('#formSave'); // Seletor do formulário
     
    const title = $('#title').val();
    const content = $('#content').val();
    //var content = quill.getContents(); //Está dando um erro ao salvar os dados do editor...
    
   
    if (!title && !content) {
      return; // Sai da função para evitar o envio do formulário
    }

    // Verifica se o clique ocorreu fora do modal e se o formulário possui dados preenchidos
    if (!isModalOpen && modal.is(event.target)) {
      
      
      console.log('Entrou na validação')
      event.preventDefault(); // Impede o comportamento padrão de fechar o modal  
     
  
      // Envia a solicitação POST para a rota de armazenamento
      $.ajax({
        url: '/save',
        type: 'POST',
        data: {
          title: title,
          content: content,
          color: color.code
        },
        success: function (response) {
          console.log(response); // Manipule a resposta recebida aqui

            // Limpar o formulário
            form[0].reset();

         
  
          // Atualize a listagem de itens no DOM com os dados atualizados
          atualizarLista()
        },
        error: function (error) {
          console.error(error); // Manipule o erro aqui
        }
      });
    }
  
});

