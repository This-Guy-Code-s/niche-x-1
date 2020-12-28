import React from 'react';
import { UncontrolledTooltip } from 'reactstrap';
import {connect} from 'react-redux'


class ToolTip extends React.Component {
    constructor(props){
      super(props)
        this.state={
          self:Math.floor(Math.random() * 53363)
        }

    }
 

    render(){

  return (
    <div className={`theme-${this.props.theme}`}>
      <span style={{textDecoration: "underline", color:"blue"}} id={`UncontrolledTooltip-${this.state.self}`}>{this.props.title}</span>
      <UncontrolledTooltip placement="top" target={`UncontrolledTooltip-${this.state.self}`}>
       {this.props.msg}
       <br/>
       <small>{this.props.date}</small>
      </UncontrolledTooltip>
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
  )(ToolTip)