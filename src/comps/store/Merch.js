import React from 'react';
import {connect} from 'react-redux'
import SmallSC from './SmallSC'
import BigSC from './BigSC'

class Merch extends React.Component {
    constructor(props){
      super(props)
        this.state={
          window_size:window.innerWidth<700?true:false
        }

    }


    render(){

  return (

    <div className="container-fluid merch-par">
    <div className="container merch">





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
key={i}
/>)

  })
}
</div>
</div>
  );
    }
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