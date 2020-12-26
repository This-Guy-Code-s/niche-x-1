
import React from 'react';
import {connect} from 'react-redux'

class BigSC extends React.Component {
    constructor(props){
      super(props)
        this.state={
          self:Math.floor(Math.random() * 53363)
        }

    }

    render(){

  return (



 <div className="container d-flex justify-content-center">
     <figure className={`card scb-card scb-card-product-grid card-lg scb-card-lg theme-${this.props.theme}`}> <a href={this.props.link} className="scb-img-wrap" data-abc="true"> <img src={this.props.img} alt="squirt.blog"/> </a>
         <figcaption className="scb-info-wrap">
             <div className="row">
                 <div className="col-md-9 col-xs-9"> <a href={this.props.link} className="scb-title" data-abc="true">{this.props.title}</a> <span className="rated">{this.props.type}</span> </div>
                 <div className="col-md-3 col-xs-3">
                     <div className="scb-rating text-right"> <i className="scb-fas fas fa-star"></i> <i className="scb-fas fas fa-star"></i> <i className="scb-fas fas fa-star"></i> <i className="scb-fas fas fa-star"></i> <span className="scb-rated">Rated 4.0/5</span> </div>
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
         <div className="scb-bottom-wrap"> <a href="/#" className="btn scb-btn btn-primary float-right" data-abc="true"> Buy now </a>
             <div className="scb-price-wrap"> <a href="/#" className="btn scb-btn btn-warning float-left" data-abc="true"> Cancel </a> </div>
         </div>
     </figure>
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
  )(BigSC)