import React from 'react';
import {connect} from 'react-redux'
import ToolTip from '../tool-tip/'
import Comments from './comments/'
import { Collapse } from 'reactstrap';



class SmallSC extends React.Component {
    constructor(props){
      super(props)
        this.state={
          self:Math.floor(Math.random() * 53363),
          isOpen:false,
        
        }

    }

    render(){

  return (


<div className='container-fluid'>
    <div className={`card sc-card mx-auto col-md-3 col-10 mt-5 theme-${this.props.theme}`}> <img className='mx-auto img-thumbnail sc-img-thumbnail' src={this.props.img} width="auto" height="auto" alt="squirt.blog"/>
        <div className="card-body sc-card-body text-center mx-auto">
            <div className='cvp'>
                <h5 className="card-title sc-card-title font-weight-bold">{this.props.title}</h5>
                <p className="card-text sc-card-text">{this.props.price}</p> <span  className="btn sc-btn sc-details px-auto">{/*USE TOOLTIP*/}<ToolTip title="view details" msg={this.props.desc}/></span><br /> <span className="btn sc-btn sc-cart px-auto" onClick={()=>{return this.setState({isOpen:!this.state.isOpen})}}>POST A COMMENT</span>
            </div>
        </div>
           
    </div>
    <div className="scb-bottom-wrap">
         <Comments isOpen={this.state.isOpen}/>
         <div className="cmt-drp-dwn">
         <div className="scb-price-wrap"><span className="scb-btn" onClick={()=>{return this.setState({isOpen2:!this.state.isOpen2})}}>{this.state.isOpen2?"Hide Comments":"See Comments..."}</span>
         </div>
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