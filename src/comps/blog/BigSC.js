
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

// title={post.title}
// img={post.img}
// desc={post.desc}
// link={post.link}
// linkx={post.linkx}
// date={post.date}
// type={post.type}
// likes={post.likes}
// comments={post.comments}

     <figure className={`card scb-card scb-card-product-grid card-lg scb-card-lg theme-${this.props.theme}`}> <a href={this.props.link || this.props.linkx} className="scb-img-wrap" data-abc="true"> <img src={this.props.img} alt="squirt.blog"/> </a>
         <figcaption className="scb-info-wrap">
             <div className="row">
                 <div className="col-md-9 col-xs-9">Likes: <b className="scb-likes">{this.props.likes}</b></div>
                 <div className="col-md-3 col-xs-3">
                     <div className="scb-rating text-right"> <span className="scb-rated">{this.props.title}</span> </div>
                 </div>
             </div>
         </figcaption>
         <div className="scb-bottom-wrap-payment">
             <figcaption className="scb-info-wrap">
                 <div className="row">
                     <div className="col-md-9 col-xs-9">Date Posted: <small>{this.props.date}</small></div>
                     <div className="col-md-3 col-xs-3">
                     </div>
                 </div>
             </figcaption>
         </div>
         <div className="scb-bottom-wrap"> <span className=" scb-btn  float-right" data-abc="true">Comment</span>
             <div className="scb-price-wrap"> <span className=" scb-btn  float-left" data-abc="true"> <ToolTip title="Description" msg={this.props.desc}/> </span> </div>
         </div>
     </figure>
  );
    }
}



const mapStateToProps = state =>{
  return {
    theme:state.theme,
  }
}


export default connect(
    mapStateToProps,
    {}
  )(BigSC)