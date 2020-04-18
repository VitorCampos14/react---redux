import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComp'
// import {CompA, CompB} from './componentes/DoisComp'
// import MultiElementos from './componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <Familia sobrenome ="Pereira">
            <Membro nome ="Andre"></Membro>
            <Membro nome ="Vitor"></Membro>
        </Familia>
        {/* <FamiliaSilva>

        </FamiliaSilva> */}
        {/* <MultiElementos></MultiElementos> */}
        {/* <CompA valor = "Olá!">  </CompA>
        <CompB valor = "B na área!">  </CompB> */}
        {/* {<PrimeiroComponente valor = "Buenos Días!" valorII = "Ohayo!"/>} */}
    </div>, 
   elemento
)

// const jsx = <h1>Olá React!</h1>
// ReactDOM.render(
//     jsx, 
//    elemento
// ) 

