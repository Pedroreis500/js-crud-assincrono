
const getUrl = new URL(window.location)

const id = getUrl.searchParams.get('id')

const inputNome =  document.querySelector('[data-nome]')
const inputEmail = document.querySelector('[data-email]')

function detalha(id) 
{
    const http = new XMLHttpRequest();    
    http.open('GET',`http://localhost:3000/profile/${id}`) 
    const promise = new Promise(function (resolve, reject) {
            http.onload = () => 
            {
                if (http.status >= 400) 
                {
                    reject(JSON.parse(http.response));
                } 
                    else 
                    {
                        resolve(JSON.parse(http.response));
                    }
            }
            http.send();
        })
   
    return promise;
}

detalha(id).then(dados =>{
    inputNome.value = dados.nome
    inputEmail.value = dados.email
})


    let  form = document.querySelector('[data-form]')

    form.addEventListener('submit',function (event) {
       event.preventDefault();
        let url = `http://localhost:3000/profile/${id}`;
        const http = new XMLHttpRequest();
        http.open("PUT", url)
        http.setRequestHeader("Content-Type", "application/json");
       
        let cliente = `{
            "id": ${id},
            "nome": ${JSON.stringify(inputNome.value)},
            "email": ${JSON.stringify(inputEmail.value)} 
          }`;

        http.send(cliente);
        window.location.href = '../../../app/views/edicao_concluida.html'
    })



