import React from 'react'
import {connect} from 'react-redux'
import { Tooltip } from 'reactstrap';
import {toggle_drp_dwn} from '../../redux/actions'

class Hero extends React.Component{
  constructor(props){
    super(props)
    this.state={
      tooltipOpen:false
    }
    this.toggle = this.toggle.bind(this)
    this.moveDown = this.moveDown.bind(this)
  }

  toggle(){
    return this.setState({tooltipOpen:!this.state.tooltipOpen})
  }


moveDown(){
  this.props.toggle_drp_dwn(false,-1)
  let spot = document.querySelector("#home")
 return spot.scrollIntoView()
}


componentDidMount(){
}


  render(){

  return (
       
<div className='hero'>
  <div className="hero-one"></div>
  <div className="hero-two"></div>
  <h1 className="header-title"><span className="header-primary">$quirt</span></h1>
  <div className="header-title" style={{marginTop:"100px"}}>
      <p><span  id="DisabledAutoHideExample"><button onClick={()=>{return this.moveDown()}} className="btn focus header-slide-btn"><i className="fas fa-arrow-circle-down"></i></button></span>.</p>
      <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} autohide={false} target="DisabledAutoHideExample" toggle={this.toggle}>
        Scroll Down
      </Tooltip>
    </div>
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
  {toggle_drp_dwn}

  )(Hero);



