$(document).on('click', '#btnModalSave', function (event) {

  const button = $(this);
  const color = button.data('color');
  

  if(color == undefined){
    $('.modal-save').css('background-color', 'rgb(33, 37, 41)');
  }else {
    $('.modal-save').css('background-color', color);
  }

  // Remover os manipuladores de eventos antigos, impede que a requisição seja enviada mais de uma vez.
  $(document).off('click', '.color-save');
  $(document).off('click', '.modal-save-fade');


  // Mudanmdo cor do Modal de acordo com seleção do usuário
  $(document).on('click', '.color-save', function(e){
    colorSelected  = $(this).val();
    if(colorSelected == undefined){
      colorSelected = 'rgb(33, 37, 41)'
    }else{
      colorSelected = JSON.parse(colorSelected);
      $('.modal-save').css('background-color', colorSelected.code);
    }
  })  


  $(document).on('click', '.modal-save-fade', function(e){
    //console.log('Saiu do modal de Save')

    const formSave = $('#formSave'); // Seletor do formulário
    const modal = $('.modal-save-show'); // Seletor do modal

    const title = formSave.find('#title').val();
    //const content = formSave.find('#content').val();
    const content = quill.root.innerHTML;


    if(modal.is(e.target)){
     
      // Sai da função para evitar o envio do formulário
      if (!title || !content) {
        return; 
      }else{
        // Envia a solicitação POST para a rota de armazenamento
        $.ajax({
          url: '/save',
          type: 'POST',
          data: {
            title: title,
            content: content,
            color: colorSelected.code
          },
          success: function (response) {
            console.log(response); // Manipule a resposta recebida aqui

              // Limpar o formulário
              formSave[0].reset();


            // Atualize a listagem de itens no DOM com os dados atualizados
            atualizarLista()
          },
          error: function (error) {
            console.error(error); // Manipule o erro aqui
          }
        });
      }
    }

  })

});



$(document).on('click', '.btnModalUpdate', function (event) {
  
  const button = $(this);
  const id = button.data('id');
  const title = button.data('title');
  const content = button.data('content');
  const color = button.data('color');
  

  
  $('#ModalTarefa #titleUpdate').val(title);
 // $('#ModalTarefa #contentUpdate').val(content);
  quillUpdate.root.innerHTML = content;

  

  $('.modal-update').css('background-color', color);


  // Remover os manipuladores de eventos antigos, impede que a requisição seja enviada mais de uma vez.
  $(document).off('click', '.color-update');
  $(document).off('click', '.modal-update-fade');

  let colorSelected; 
  // Mudanmdo cor do Modal de acordo com seleção do usuário
  $(document).on('click', '.color-update', function(e){
    colorSelected  = $(this).val();
    colorSelected = JSON.parse(colorSelected);
    $('.modal-update').css('background-color', colorSelected.code);
  })
  
  $(document).on('click', '.modal-update-fade', function(e){
    const formUpdate = $('#formUpdate'); // Seletor do formulário
    const modal = $('.modal-update-show'); // Seletor do modal


    const title = formUpdate.find('#titleUpdate').val();
    //const content = formUpdate.find('#contentUpdate').val();
    const content = quillUpdate.root.innerHTML;
    
    if(!colorSelected){
      colorSelected = new Object();
      colorSelected.code = color
    }
    

    if(modal.is(e.target)){

      // Sai da função para evitar o envio do formulário
      if (!title || !content) {
        return; 
      }else{

        // Envia a solicitação POST para a rota de armazenamento
        $.ajax({
          url: `/edit/${id}`,
          type: 'put',
          data: {
            title: title,
            content: content,
            color: colorSelected.code
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
    }    

  })


});