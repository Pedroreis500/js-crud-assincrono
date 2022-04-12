import { exibe_clientes } from '../models/read.js';
import { cria } from '../models/create.js';
import { deleta } from '../models/delete.js';


const getUrl = new URL(window.location)

const path = getUrl.pathname;

// controlador para exibir e deletar os dados dos clientes
if (path == '/app/views/lista_cliente.html')
{
    exibe_clientes.retornaClientes()
    .then(exibe_clientes.clientes)
    deleta.remover()
}

// controlador para adicionar um cliente
else if(path == '/app/views/cadastra_cliente.html')
{
    cria.addCliente();
}




















