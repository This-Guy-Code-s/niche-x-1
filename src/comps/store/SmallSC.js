import React from 'react';
import {connect} from 'react-redux'
import ToolTip from '../tool-tip/'



class SmallSC extends React.Component {
    constructor(props){
      super(props)
        this.state={
          self:Math.floor(Math.random() * 53363)
        }

    }

    render(){

  return (


<div className='container-fluid'>
    <div className={`card sc-card mx-auto col-md-3 col-10 mt-5 theme-${this.props.theme}`}> <img className='mx-auto img-thumbnail sc-img-thumbnail' src={this.props.img} width="auto" height="auto" alt="squirt.blog"/>
        <div className="card-body sc-card-body text-center mx-auto">
            <div className='cvp'>
                <h5 className="card-title sc-card-title font-weight-bold">{this.props.title}</h5>
                <p className="card-text sc-card-text">{this.props.price}</p> <a href={this.props.link} className="btn sc-btn sc-details px-auto">{/*USE TOOLTIP*/}<ToolTip title="view details" msg={this.props.desc}/></a><br /> <a href="/#" className="btn sc-btn sc-cart px-auto">BUY NOW</a>
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