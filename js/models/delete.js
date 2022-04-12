
const tabela = document.querySelector('[data-tabela]')
function removeCliente(id)
{
   let url = `http://localhost:3000/profile/${id}`;
   const http = new XMLHttpRequest();
   http.open("DELETE", url)
   http.send();
   return http;
}

function remover() 
{

tabela.addEventListener("click",function (event) 
{
  const ehbotaodeletar = event.target.className === 'botao-simples botao-simples--excluir'
    if(ehbotaodeletar)
    {
      try 
      {
        const trCliente = event.target.closest('[data-id]')
        const id = trCliente.dataset.id;
        removeCliente(id)
      } 
        catch (error) 
        {
          console.log(error);
          window.location.href = '../../../app/views/erro.html'
        }
    
    }
});
}

export const deleta =
{
  remover
}
