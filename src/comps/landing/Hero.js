import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class Hero extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }


componentDidMount(){
  console.log(this.props)
}


  render(){

  return (
       
<div className='hero'>
  <div className="hero-one"></div>
  <div className="hero-two"></div>
  <h1 className="header-title"><span className="header-primary">$quirt</span><span className="header-sub">Best Porn and Blog Site</span></h1>
</div>


  );
}
  }




  const mapStateToProps = state =>{
    return {
      ...state
    }
  }

export default connect(


  mapStateToProps,
  {}

  )(Hero);
