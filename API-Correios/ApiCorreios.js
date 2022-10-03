function GetAdress(){
  const cep = document.querySelector('#cep').value
    const url= `http://viacep.com.br/ws/${cep}/json/`
    
    fetch(url)
    .then(resposta=>resposta.json())
    .then(dado=>{
      idcep.textContent=JSON.stringify(dado.cep)
      idlogradouro.textContent=JSON.stringify(dado.logradouro)
      idcomplemento.textContent=JSON.stringify(dado.complemento)
      idbairro.textContent=JSON.stringify(dado.bairro)
      idlocalidade.textContent=JSON.stringify(dado.localidade)
      iduf.textContent=JSON.stringify(dado.uf)
      idibge.textContent=JSON.stringify(dado.ibge)
      idgia.textContent=JSON.stringify(dado.gia)
      idddd.textContent=JSON.stringify(dado.ddd)
      idsiafi.textContent=JSON.stringify(dado.siafi)})
}
      
    
             
    
    


