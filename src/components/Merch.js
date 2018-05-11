import React, { Component } from 'react'
import { FaCircle } from 'react-icons/lib/fa'
import { connect } from 'react-redux'

class Merch extends Component {

  state = {
    merch:[]
  }
  
  componentDidMount(){
    this.props.merch.map((merch)=>(
      this.setState((prevState,props)=>({
        merch:[
          ...prevState.merch,
          {
          item:merch.item,
          price:merch.price,
          style:merch.style
        }]
      }))
    ))
  }

  render () {
    return (
      <section style={{flex:'0 0 100%',marginBottom:'2rem'}}>
        {
          this.state.merch.map((merch) => (
            <div className="merch" key={merch.item}>
              <div className="merch__title">
                <FaCircle className={merch.style}/>
                <div className="merch__title-name">
                  {merch.item}
                </div>
              </div>
              <div className="merch__price">${merch.price.toFixed(2)}</div>
            </div>
          ))
        }
      </section>
    )
  }
}


const mapStateToProps = ({ merch }) => {
  return{
    merch
  }
}

export default connect(mapStateToProps)(Merch)
