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



const form = document.getElementById('formDell');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    const filteredData = {
        title: formData.get('title'),
        content: formData.get('content')
    };

    console.log(filteredData);

    fetch('/save', {
        method: 'POST',
        body: JSON.stringify(filteredData),
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
})
