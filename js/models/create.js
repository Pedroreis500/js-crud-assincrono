
 function addCliente() 
{
  const xhr = new XMLHttpRequest();
  const addButton = document.querySelector("#botao-add");
  addButton.addEventListener("click",function (event) 
  {
      event.preventDefault();
      let  form = document.querySelector('[data-form]')
      
      let cliente = JSON.stringify({
          nome: form.nome.value,
          email: form.email.value,
        });

        xhr.open("POST", 'http://localhost:3000/profile')
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(cliente)
        if(xhr.status >= 400){
          throw new Error('não foi possivel adicionar um cliente')
        }
        else{
          window.location.href = '../../../app/views/cadastro_concluido.html'
        }
        
  })
}


export const cria =
{
  addCliente
}


