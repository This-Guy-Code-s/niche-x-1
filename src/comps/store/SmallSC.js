import React, {useState} from 'react';
import {connect} from 'react-redux'

class SmallSC extends React.Component {
    constructor(props){
      super(props)
        this.state={
          self:Math.floor(Math.random() * 53363)
        }

    }

    render(){

  return (


<div class='container-fluid'>
    <div className={`card sc-card mx-auto col-md-3 col-10 mt-5 theme-${this.props.theme}`}> <img class='mx-auto img-thumbnail sc-img-thumbnail' src={this.props.img} width="auto" height="auto" />
        <div className="card-body sc-card-body text-center mx-auto">
            <div class='cvp'>
                <h5 className="card-title sc-card-title font-weight-bold">{this.props.title}</h5>
                <p className="card-text sc-card-text">{this.props.price}</p> <a href={this.props.link} className="btn sc-btn sc-details px-auto">{/*USE TOOLTIP*/}view details</a><br /> <a href="#" className="btn sc-btn sc-cart px-auto">BUY NOW</a>
            </div>
        </div>
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
  )(SmallSC)