

/*
const listaItens = [
  { _id: 1, title: "Item 1", content: "Conteúdo do item 1" },
  { _id: 2, title: "Item 2", content: "Conteúdo do item 2" },
  { _id: 3, title: "Item 3", content: "Conteúdo do item 3" },
  // Adicione mais itens conforme necessário
];




// Função para desenhar os itens da lista
function desenharLista() {

  
    const listaContainer = document.getElementById("lista-container");

    listaContainer.innerHTML = ''; // Limpar o conteúdo existente

    listaItens.forEach((item) => {
      // Criar o elemento de item da lista
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("lista-item");
      itemDiv.id = `lista-item-${item._id}`;

      // Criar o elemento de corpo do item
      const corpoDiv = document.createElement("div");
      corpoDiv.classList.add("lista-item-corpo");

      // Criar o elemento de título
      const tituloDiv = document.createElement("div");
      tituloDiv.classList.add("lista-item-titulo");
      tituloDiv.textContent = item.title;

      // Criar o elemento de conteúdo
      const conteudoDiv = document.createElement("div");
      conteudoDiv.classList.add("lista-item-conteudo");
      conteudoDiv.textContent = item.content;

      // Adicionar o evento de clique para abrir o modal
      conteudoDiv.addEventListener("click", () => {
        const modal = document.getElementById(`ModalTarefa-${item._id}`);
        modal.style.display = "block";
      });

      // Adicionar os elementos à árvore DOM
      corpoDiv.appendChild(tituloDiv);
      corpoDiv.appendChild(conteudoDiv);
      itemDiv.appendChild(corpoDiv);
      listaContainer.appendChild(itemDiv);

      // Criar o modal correspondente
      const modalDiv = document.createElement("div");
      modalDiv.classList.add("modal");
      modalDiv.classList.add("fade");
      modalDiv.id = `ModalTarefa-${item._id}`;
      modalDiv.setAttribute("tabindex", "-1");
      modalDiv.setAttribute("role", "dialog");
      modalDiv.setAttribute("aria-labelledby", "TituloModalCentralizado");
      modalDiv.setAttribute("aria-hidden", "true");

      // Criar o conteúdo do modal
      const modalContentDiv = document.createElement("div");
      modalContentDiv.classList.add("modal-content");
      modalContentDiv.classList.add("modal-tarefa");

      // Criar o formulário do modal
      const modalForm = document.createElement("form");
      modalForm.action = `/edit/${item._id}`;
      modalForm.method = "POST";

      // Criar o cabeçalho do modal
      const modalHeader = document.createElement("div");
      modalHeader.classList.add("modal-header");

      const inputTitle = document.createElement("input");
      inputTitle.type = "text";
      inputTitle.value = item.title;
      inputTitle.name = "title";

      modalHeader.appendChild(inputTitle);

      // Criar o corpo do modal
      const modalBody = document.createElement("div");
      modalBody.classList.add("modal-body");

      const textareaContent = document.createElement("textarea");
      textareaContent.name = "content";

      textareaContent.textContent = item.content;

      modalBody.appendChild(textareaContent);

      // Criar o rodapé do modal
      const modalFooter = document.createElement("div");
      modalFooter.classList.add("modal-footer");

      const confirmButton = document.createElement("button");
      confirmButton.type = "submit";
      confirmButton.textContent = "Confirmar";

      const cancelButton = document.createElement("a");
      cancelButton.href = "/";
      cancelButton.classList.add("cancel");
      cancelButton.textContent = "Cancelar";

      const closeButton = document.createElement("button");
      closeButton.type = "button";
      closeButton.classList.add("close");
      closeButton.setAttribute("data-dismiss", "modal");
      closeButton.setAttribute("aria-label", "Fechar");
      closeButton.innerHTML = '<span aria-hidden="true">&times;</span>';

      modalFooter.appendChild(confirmButton);
      modalFooter.appendChild(cancelButton);
      modalFooter.appendChild(closeButton);

      modalForm.appendChild(modalHeader);
      modalForm.appendChild(modalBody);
      modalForm.appendChild(modalFooter);

      modalContentDiv.appendChild(modalForm);
      modalDiv.appendChild(modalContentDiv);

      // Adicionar o modal ao final do corpo do documento
      document.body.appendChild(modalDiv);
    });
  }*/


  function atualizarLista() {
    $.ajax({
      url: '/',
      method: 'GET',
      success: function(response) {
        
        let parsedResponse = $(response);

        //$('#lista-dados').html(response);
        $('#lista-dados').html(parsedResponse.find('#lista-dados').html());
      },
      error: function(xhr, status, error) {
        console.error('Erro ao atualizar a lista de dados:', error);
      }
    });
  }