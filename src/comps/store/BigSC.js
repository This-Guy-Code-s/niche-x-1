
import React from 'react';
import {connect} from 'react-redux'
import ToolTip from '../tool-tip/'


class BigSC extends React.Component {
    constructor(props){
      super(props)
        this.state={
          self:Math.floor(Math.random() * 53363),
        }

    }

    render(){

  return (



     <figure className={`card scb-card scb-card-product-grid card-lg scb-card-lg theme-${this.props.theme}`}> <a href={this.props.link} className="scb-img-wrap" data-abc="true"> <img src={this.props.img} alt="squirt.blog"/> </a>
         <figcaption className="scb-info-wrap">
             <div className="row">
                 <div className="col-md-9 col-xs-9"> <a href={this.props.link} className="scb-title" data-abc="true">{this.props.title}</a> <span className="rated">{this.props.type}</span> </div>
                 <div className="col-md-3 col-xs-3">
                     <div className="scb-rating text-right"> {new Array(this.props.rate).fill(this.props.rate).map((str,i)=><i key={i} className="scb-fas fas fa-star"></i>)}  <span className="scb-rated">Rated {this.props.rate}/5</span> </div>
                 </div>
             </div>
         </figcaption>
         <div className="scb-bottom-wrap-payment">
             <figcaption className="scb-info-wrap">
                 <div className="row">
                     <div className="col-md-9 col-xs-9"> <a href={this.props.link} className="scb-title" data-abc="true">{this.props.price}</a>  </div>
                     <div className="col-md-3 col-xs-3">
                     </div>
                 </div>
             </figcaption>
         </div>
         <div className="scb-bottom-wrap"> <span className=" scb-btn  float-right" data-abc="true"> Buy now </span>
             <div className="scb-price-wrap"> <span className=" scb-btn  float-left" data-abc="true"> <ToolTip title="view details" msg={this.props.desc}/> </span> </div>
         </div>
     </figure>
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
  )(BigSC)