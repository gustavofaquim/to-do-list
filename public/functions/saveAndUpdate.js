$(document).on('click', '#btnModalSave', function (event) {

  const button = $(this);
  const color = button.data('color');

  if(color == undefined){
    $('.modal-save').css('background-color', 'rgb(33, 37, 41)');
  }else {
    $('.modal-update').css('background-color', color);
  }


  // Mudanmdo cor do Modal de acordo com seleção do usuário
  $(document).on('click', '.color-save', function(e){
    colorSelected  = $(this).val();
    colorSelected = JSON.parse(colorSelected);
    $('.modal-save').css('background-color', colorSelected.code);
  })  

});



$(document).on('click', '.btnModalUpdate', function (event) {
  
  const button = $(this);
  const id = button.data('id');
  const title = button.data('title');
  const content = button.data('content');
  const color = button.data('color');
  const modal = $('#ModalTarefa'); // Seletor do modal


  $('#ModalTarefa #titleUpdate').val(title);
  $('#ModalTarefa #contentUpdate').val(content);

  $('.modal-update').css('background-color', color);

  $(document).on('click', '.color-update', function(e){
    colorSelected  = $(this).val();
    colorSelected = JSON.parse(colorSelected);
  
    $('.modal-update').css('background-color', colorSelected.code);
  })  
});




/*

// Variável para indicar se o modal está aberto
let isModalOpen = false;

// Captura o evento de clique no botão "Abrir Modal"
$('#btnModalSave').on('click', function (event) {
  isModalOpen = true;
  isModalUpdateOpen = false;

  console.log('Entrou no modal de Save')

  
});

// Captura o evento de clique no botão "Cancelar" ou quando o modal é fechado
$('#cancelButton, .modal').on('click', function () {
  isModalOpen = false;
});


// Variável para indicar se o modal está aberto
let isModalUpdateOpen = false;


$('.btnModalUpdate').on('click', function () {
    isModalUpdateOpen = true;
    isModalOpen = false;
    
    console.log('Entrou no modal de Update')

  });

// Captura o evento de clique no botão "Cancelar" ou quando o modal é fechado
$('#cancelButton, .modalUpdate').on('click', function () {
    isModalUpdateOpen = false;
});
  

  
// Captura o evento de clique no documento
$(document).on('click', function (event) {

    const modal = $('.modal'); // Seletor do modal
    const form = $('#formAdd'); // Seletor do formulário
    const id = $(this).data('id')
    const updateModal = $('#ModalTarefa-'+id); // Seletor do modal
    const formUpdate = $('#formUpdate-'+id); // Seletor do formulário

    console.log(' ----- salve -----')
    console.log(!isModalOpen)
    console.log(modal.is(event.target))
    console.log(' ----- update -----')
    console.log(isModalUpdateOpen)
    console.log(updateModal.is(event.target))
    
    //Saindo do modal Save
    if(!isModalOpen && modal.is(event.target)){
        console.log('Saiu do modal de Save')
    }
    else if(isModalUpdateOpen && updateModal.is(event.target)){
        console.log('Saiu do modal de Update')
    }



});
*/