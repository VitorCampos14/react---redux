import React from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponente from './componentes/PrimeiroComp'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <PrimeiroComponente valor = "Buenos Días!" valorII = "Ohayo!"/>
    </div>, 
   elemento
)

// const jsx = <h1>Olá React!</h1>
// ReactDOM.render(
//     jsx, 
//    elemento
// )

