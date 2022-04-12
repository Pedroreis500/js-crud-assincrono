import { createNewTr } from '../templates/criaNovaTr.js';

// retorna a resposta da requisição (dados dos clientes) 
function retornaClientes() 
{
    const http = new XMLHttpRequest(); // faz a requisição http    
    http.open('GET','http://localhost:3000/profile') // abre a comunição entre a app e api
    const promise = new Promise(function (resolve, reject) {
            http.onload = () => 
            {
                if (http.status >= 400) 
                {
                    reject(JSON.parse(http.response));
                    window.location.href = '../../../app/views/erro.html'
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


// pega os dados dos clientes e exibe na pág
function clientes(data)
{
    // percorre o dom pra achar o tbody
const tbody = document.querySelector('[data-tabela]');
    data.forEach(cliente =>
        {
        tbody.appendChild(createNewTr(cliente.nome,cliente.email,cliente.id))
        });
}


export const exibe_clientes =
{
    retornaClientes,
    clientes
}