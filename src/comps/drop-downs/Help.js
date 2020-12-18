import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'





class Help extends React.Component{
	constructor(props){
		super(props)
		this.state={

		}
	}







render(){
return (


<div className={`container theme-${this.props.theme}`}> 
<div  className={`row theme-${this.props.theme}`}>
    <div className="col-lg-12">
        <div className="wrapper wrapper-content animated fadeInRight">

            <div className="ibox-content m-b-sm border-bottom">
                <div className="p-xs">
                    <div className="pull-left m-r-md">
                        <i className="far fa-edit text-navy mid-icon"></i>
                    </div>
                    <h2>What To Do...</h2>
                    <span>Most Common Given Solutions...</span>
                </div>
            </div>

            <div className="ibox-content forum-container">


                <div className="forum-item">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="forum-icon">
                                 <i className="fas fa-comments" style={{fontSize:'2rem'}}/>
                            </div>
                            <NavLink to="/blog" className="forum-item-title">View Our Blog</NavLink>
                            <div className="forum-sub-title">View our latest post/content we post on our blog. Comment and share your thoughts along with others anonymously.</div>
                        </div>
                       
                     
                        <div className="col-md-1 forum-info">
                            <span className="views-number">
                                <i className="fas fa-comments" style={{fontSize:'2rem'}}/>
                            </span>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>








                <div className="forum-item">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="forum-icon">
                                 <i className="fas fa-store-alt" style={{fontSize:'2rem'}}/>
                            </div>
                            <NavLink to="/store" className="forum-item-title">Shop At Our Store</NavLink>
                            <div className="forum-sub-title">Our store is constantly updated with the best price , shipping speed, shipping price, wholesale and/or single deal there is to offer. Items are distributed by Amazon.</div>
                        </div>
                       
                     
                        <div className="col-md-1 forum-info">
                            <span className="views-number">
                                <i className="fas fa-store-alt" style={{fontSize:'2rem'}}/>
                            </span>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>

















                <div className="forum-item ">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="forum-icon">
                                 <i className="fas fa-flag" style={{fontSize:'2rem'}}/>
                            </div>
                            <NavLink to="/" className="forum-item-title">See Something Wrong?</NavLink>
                            <div className="forum-sub-title">Report any problem you see going on from the "Report" form. Its the Link with this same red flag icon.</div>
                        </div>
                       
                     
                        <div className="col-md-1 forum-info">
                            <span className="views-number">
                                <i className="fas fa-flag" style={{fontSize:'2rem'}}/>
                            </span>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>















                <div className="forum-item active">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="forum-icon">
                                 <i className="fas fa-paper-plane" style={{fontSize:'2rem'}}/>
                            </div>
                            <NavLink to="/" className="forum-item-title">Subscribe</NavLink>
                            <div className="forum-sub-title">Subscribe to our news letter and stay updated on post , content, and features to this application. We only need an Email.</div>
                        </div>
                       
                     
                        <div className="col-md-1 forum-info">
                            <span className="views-number">
                                <i className="fas fa-paper-plane" style={{fontSize:'2rem'}}/>
                            </span>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>









                <div className="forum-item active">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="forum-icon">
                                 <i className="fas fa-cog" style={{fontSize:'2rem'}}/>
                            </div>
                            <NavLink to="/" className="forum-item-title">Settings</NavLink>
                            <div className="forum-sub-title">Change some things around about how this application is opperating in your browser. We dont use, need , or steal data.</div>
                        </div>
                       
                     
                        <div className="col-md-1 forum-info">
                            <span className="views-number">
                                <i className="fas fa-cog" style={{fontSize:'2rem'}}/>
                            </span>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
       
           

            </div>
        </div>
    </div>
</div>
</div>



)


}
}



const mapStateToProps = state =>{
    return {
        ...state
    }
}



export default connect(
    mapStateToProps,
    {}
    )(Help)