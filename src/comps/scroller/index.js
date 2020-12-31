import React from 'react';
import { Alert } from 'reactstrap';
import {connect} from 'react-redux'


/*
passing in where (id name) and direction (true or false[up or down])



*/



class Scroller extends React.Component{
	constructor(props){
		super(props)
		this.state={

		}
		this.scroll_2=this.scroll_2.bind(this)
	}


	scroll_2(){
		return document.querySelector(`#${this.props.where}`).scrollIntoView()
	}




	render(){
  return (
    <Alert className={`scroller theme-${this.props.theme==='dark'?'light':'dark'}`} onClick={this.scroll_2} >
    {
    	this.props.direction?
    	(<i className="fas fa-angle-double-up arrowz" ></i>)
    	:
    	(<i className="fas fa-angle-double-down arrowz"></i>)
    }
    </Alert>
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
	)(Scroller);
