import React from 'react'


export default props =>{
  const aprovados =['Paula', 'Vitor', 'Gustavo', 'Pedro']

  const gerarItens = itens =>{
    return itens.map(item => <li> {item} </li> )
  }
  
  return(
    <ul>
  
      {gerarItens(aprovados)}
    </ul>


  )
}