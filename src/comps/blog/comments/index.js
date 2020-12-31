import React from 'react';
import {connect} from 'react-redux'
import { Collapse } from 'reactstrap';
import CommentsBox from './CommentsBox'






class DropDownFrame extends React.Component {
    constructor(props){
      super(props)
        this.state={
          isOpen:this.props.top3_banner[Math.floor(Math.random() * 3)]

        }

    }

    render(){

  return (
    <div className={`theme-${this.props.theme}`}>
      <Collapse isOpen={this.props.isOpen}>
          <CommentsBox/>
      </Collapse>
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
  )(DropDownFrame)