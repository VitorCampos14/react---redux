import React, {Component} from 'react'

export default class Contador extends Component{
  state = {
    numero:0
  }


  maisUm =() =>{
    this.setState({numero: this.state.numero +1 })


    // this.state.numero++
  }
  menosUm =() =>{
    this.setState({numero: this.state.numero -1 })


  }



  render( ) {
    return (
      <div>
        <div>
          Número: {this.state.numero}
        </div>
        <button onClick={this.maisUm}>Inc</button>
        <button onClick={this.menosUm}>Dec</button>
      </div>
    )
  }



}