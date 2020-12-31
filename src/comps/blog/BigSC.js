
import React from 'react';
import {connect} from 'react-redux'
import ToolTip from '../tool-tip/'
import Comments from './comments/'
import { Collapse } from 'reactstrap';




class BigSC extends React.Component {
    constructor(props){
        super(props)
        this.state={
          self:Math.floor(Math.random() * 53363),
          isOpen:false,
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
                 <div className="col-md-9 col-xs-9">Catagory: <b className="scb-likes">{this.props.type}</b></div>
                 <div className="col-md-9 col-xs-9">Type: <b className="scb-likes">{this.props.genre}</b></div>
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
         <div className="scb-bottom-wrap"> <span className=" scb-btn  float-right" data-abc="true" onClick={()=>{return this.setState({isOpen:!this.state.isOpen})}}>Post Comment</span>
             <div className="scb-price-wrap"> <span className=" scb-btn  float-left" data-abc="true"> <ToolTip title="Description" msg={this.props.desc}/> </span> </div>
         </div>

         <div className="scb-bottom-wrap">
         <Comments isOpen={this.state.isOpen}/>
         <div className="cmt-drp-dwn">
         <span onClick={()=>{return this.setState({isOpen2:!this.state.isOpen2})}}>{this.state.isOpen2?"Hide Comments":"See Comments"}</span>
         </div>
        <Collapse isOpen={this.state.isOpen2}>
         <section className="cmt-frame">
    <div className="container cmt-con">
        <div className="row cmt-row">
            <div className="col-sm-5 col-md-6 col-12 pb-4 cmt-list">
               {
                new Array(10).fill(1).map((obj,i)=>{
                    return (
                         <div className={`comment mt-4 text-justify float-left theme${this.props.theme}`} key={i}> 
                    <h4>Jhon Doe</h4> <span>- 20 October, 2018</span> <br/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
                </div>
                        )
                })
               }
            
            </div>
         
        </div>
    </div>
</section>
</Collapse>
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