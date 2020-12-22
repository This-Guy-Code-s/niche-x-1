import React, {useState} from 'react';
import { UncontrolledTooltip } from 'reactstrap';
import {connect} from 'react-redux'


class Quotes extends React.Component {
    constructor(props){
      super(props)
        this.state={
        }

    }


    render(){

  return (
  <div className={`container-fluid theme-${this.props.theme}`}>
    <div className={`row justify-content-center theme-${this.props.theme}`}>
        <div className={`col-sm-11 col-md-9 col-lg-8 col-xl-7 theme-${this.props.theme}`}>
            <div className={` quote-card theme-${this.props.theme}`}>
                <p className={`post`}> <span><img className="img quote-nice-img" src={this.props.quotesNImage}/></span> <span className="quote-post-txt">{this.props.msg}</span> <span><img className="quote-nice-img" src={this.props.quotesNImage}/></span> </p>
            </div>
            <div className={`row d-flex justify-content-center`}>
                <div className="figure"> <img className="img quote-img quote-profile-pic quote-fit-image" src={this.props.avitar}/> </div>
            </div>
        </div>
    </div>
</div>
  );
    }
}



const mapStateToProps = state =>{
  return {
    theme:state.theme
  }
}


export default connect(
    mapStateToProps,
    {}
  )(Quotes)