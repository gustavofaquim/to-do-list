
const form = document.getElementById('formAdd');

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
    .then(response => response.json())
    .then(data => {
        let lista = data;
        console.log(data);
        
    })
    .catch(error => {
        console.error(error);
    })
})
