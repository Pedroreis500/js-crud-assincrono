export function errorHttpStatus(http)
{
    if(!http.status >= 400){
        window.location.href = '../../../app/views/cadastro_concluido.html'
      }
      else{
        throw new Error('não foi possivel adicionar um cliente')
      }
}