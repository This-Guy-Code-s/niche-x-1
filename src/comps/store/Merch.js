import React from 'react';
import {connect} from 'react-redux'
import SmallSC from './SmallSC'
import BigSC from './BigSC'
import { Collapse, Button, CardBody, Card } from 'reactstrap';


class Merch extends React.Component {
    constructor(props){
      super(props)
        this.state={
          window_size:window.innerWidth<700?true:false,
          isOpen:true
        }
        this.toggle=this.toggle.bind(this)

    }



     toggle(props){
        this.setState({
         isOpen:!this.state.isOpen
        })

}

    render(){

  return (

    <div className="container-fluid ">
    <div className="container merch">
     <div className="merch-btn-h"> <button className="btn merch-btn" onClick={this.toggle} style={{ marginBottom: '1rem' }}>{this.state.isOpen?"Close":"Open"}</button></div>
      <Collapse isOpen={this.state.isOpen}>
   {
  this.props.store_list.map((merch,i)=>{
     return this.state.window_size?
      (<SmallSC 
title={merch.title}
img={merch.img}
price={merch.price}
desc={merch.desc}
key={i}
/>)
      :
      (<BigSC 
title={merch.title}
img={merch.img}
price={merch.price}
type={merch.type}
desc={merch.desc}
rate={merch.rate}
key={i}
/>)

  })
}
      </Collapse>
    </div>
    </div>
  
  )}
}



const mapStateToProps = state =>{
  return {
    ...state,
  }
}


export default connect(
    mapStateToProps,
    {}
  )(Merch)
