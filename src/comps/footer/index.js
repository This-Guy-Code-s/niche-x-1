import React from 'react'
import {connect} from 'react-redux'

class Footer extends React.Component{
constructor(props){
	super(props)
    this.state={

    }
}


	render(){
		return (
			<footer className="kilimanjaro_area">
        <div className={`foo_top_header_one section_padding_100_70 theme-comp-${this.props.theme}`} >
            <div className="container">
                <div className="row">

                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="kilimanjaro_part">
                            <h4>Quick Store</h4>
                            <p>These are some items you might find useful and the most clicked on items. </p>
                            <p>We affiliate with many other online markets to make sure we display the best price out currently and quickest delivery.</p>
                        </div>
                        
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="kilimanjaro_part">
                            <h6>Most Picked</h6>
                            <ul className=" kilimanjaro_widget">
                            {
                                this.props.amazon_footer_links.map((amz_lnk,i)=>{
                                    return (

                                            <li key={i}><a href={amz_lnk.url}>{amz_lnk.name}</a></li>
                                        )
                                })
                            }
                            </ul>
                        </div>

                      
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="kilimanjaro_part">
                            <h6>Trending This Month</h6>
                            <div className="kilimanjaro_blog_area">
                                <div className="kilimanjaro_thumb">
								<a href="https://www.pornhub.com/view_video.php?viewkey=ph57ed85b54be82"><img src={this.props.footer_vid[0]} height="150px" alt="squirt.blog"/></a>

                                </div>
                                <span>Most Erotic</span>
                                <p className="kilimanjaro_date">KiKi Minaj</p>
                                <p>From sex faces to body language...You'll go crazy over her.</p>
                            </div>
                            <div className="kilimanjaro_blog_area">
                                <div className="kilimanjaro_thumb">
								<a href="https://www.pornhub.com/view_video.php?viewkey=ph5f8a7ba96aa57"><img src={this.props.footer_vid[1]} height="150px" alt="squirt.blog"/></a>
                                </div>
                                <span>Most Submissive</span>
                                <p className="kilimanjaro_date">Scralit Scandal</p>
                                <p>Every real man loves for his partner to be submissive.</p>
                            </div>
                          
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="kilimanjaro_part">
                            <h6>Quick Contact</h6>
                            <div className="kilimanjaro_single_contact_info">
                                <h5>Email:</h5>
                                <p><a href='mailto:labortechsolution@mail.com'>squirt.blog.support@gmail.com</a><br/></p>
                            </div>
                        </div>
                      <div className="kilimanjaro_part m-top-15">
                            <h6>Social Links</h6>
                            <ul className="kilimanjaro_social_links" id='soci'>
                                <li><a href="https://twitter.com/squirt_blog"><i className="fab fa-twitter" aria-hidden="true"></i> Twitter</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className=" kilimanjaro_bottom_header_one section_padding_20 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className='theme-txt'>Squirt.Blog &copy; 2020</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
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
	)(Footer)







  // <div className="kilimanjaro_part m-top-15">
  //                           <h6>Other</h6>
  //                           <ul className="kilimanjaro_links">
  //                               <li><a href="#"><i className="fas fa-angle-right" aria-hidden="true"></i>Terms & Conditions</a></li>
  //                               <li><a href="#"><i className="fas fa-angle-right" aria-hidden="true"></i>About Licences</a></li>
  //                               <li><a href="#"><i className="fas fa-angle-right" aria-hidden="true"></i>Help & Support</a></li>
  //                               <li><a href="#"><i className="fas fa-angle-right" aria-hidden="true"></i>Careers</a></li>
  //                               <li><a href="#"><i className="fas fa-angle-right" aria-hidden="true"></i>Privacy Policy</a></li>
  //                               <li><a href="#"><i className="fas fa-angle-right" aria-hidden="true"></i>Community & Forum</a></li>
  //                           </ul>
  //                       </div>