import React from 'react'
import {connect} from 'react-redux'







class CommentsBox extends React.Component{
	constructor(props){
	super(props)
		this.state={

		}
	}



render(){
return (

<div className="container-fluid">
                <form id="align-form" className={`cmt-form theme-${this.props.theme}`}>
                    <div  className={`form-group theme-${this.props.theme}`}>
                        <h4>Leave a comment</h4> <label htmlFor="message">Message</label> <textarea name="msg" id="" cols="30" rows="5" className={`form-control theme-${this.props.theme}`}></textarea>
                    </div>
                    <div className={`form-group theme-${this.props.theme}`}> <label htmlFor="name">Name</label> <input type="text" name="name" id="fullname" className={`form-control theme-${this.props.theme}`}/> </div>
                    <div className={`form-group theme-${this.props.theme}`}> <label htmlFor="email">Email</label> <input type="text" name="email" id="email" className={`form-control theme-${this.props.theme}`}/> </div>
                    <div className={`form-group theme-${this.props.theme}`}>
                        <p className="text-secondary">Your <span className="alert-link">EMAIL</span> will not be displayed anywhere.</p>
                        <p className="text-secondary">If you do not have a <span className="alert-link">subscription</span> with us, your comment will not post.</p>
                    </div>
                    <div className="form-inline"> <input type="checkbox" name="check" id="checkbx" className="mr-1"/> <label htmlFor="subscribe">Subscribe me to the newlettter</label> </div>
                    <div className={`form-group theme-${this.props.theme}`}> <button type="button" id="post" className="btn">Post Comment</button> </div>
                </form>
</div>




)

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

)(CommentsBox)