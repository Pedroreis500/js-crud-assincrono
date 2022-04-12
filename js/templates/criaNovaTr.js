 // cria um template
 export const createNewTr = (nome,email,id) =>
 {

   const tr = document.createElement('tr')
   const content = `
   <td class="td" data-td>${nome}</td>
   <td>${email}</td>
  <td>
      <ul class="tabela__botoes-controle">
          <li><a href="../views/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
          <li><button class="botao-simples botao-simples--excluir"  type="button">Excluir</button></li>
      </ul>
  </td>
  `
  tr.innerHTML = content;
  tr.classList.add("cliente");
  tr.dataset.id = id;
  return tr;
 } 
