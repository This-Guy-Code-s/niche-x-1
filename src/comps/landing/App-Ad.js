import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {toggle_drp_dwn} from '../../redux/actions'
import {Link} from 'react-router-dom'


class Ad4App extends React.Component{
  constructor(props){
    super(props)
    this.state={
    }

    this.goto_drp_dwn = this.goto_drp_dwn.bind(this)
  }


componentDidMount(){
  console.log(this.props)
}


goto_drp_dwn(){
this.props.toggle_drp_dwn(true,3)
  setTimeout(()=>{
    let spot = document.querySelector('#nav-val')
    return spot.scrollIntoView()
  },500)
}


  render(){



return (
	

	  <div className="container">
	  <div className={`blog-card theme-${this.props.theme}`}>
    <div className="meta">
      <div className="photo" style={{backgroundImage:`url(${this.props.make_acc_img})`}}></div>
      <ul className="details">
        <li className="author"><span>We Dont Spam!</span></li>
        <li className="date">Just need a verified email.</li>
       
      </ul>
    </div>
    <div className={`description theme-${this.props.theme}`}>
      <h1>Stay Updated</h1>
      <h2>Get notified every time we post another amazing deal, content, or even when theres an update within the app.</h2>
      <p> Post and communicate with others on the in-app blog, send someone a "squirt" to let them know you want a 1 on 1(face time or message).of course they will have to accept it first.</p>
      <p className="read-more">
        <span className="x-link" onClick={this.goto_drp_dwn}>Subscribe!</span>
      </p>
    </div>
  </div>
  <div className={`blog-card alt theme-${this.props.theme}`}>
    <div className={`meta description theme-${this.props.theme}`}>
      <div className="photo" style={{backgroundImage:`url(${this.props.store_img})`}}></div>
      <ul className="details">
        <li className="date"><a href="#">Best Quality And Prices</a></li>
        <li className="date">Whole Sales</li>
        <li className="date">
         Affiliated with other shops to keep the best price knowledge
        </li>
         <li className="date">
         Detecting the best shippoing time for your city.
        </li>
      </ul>
    </div>
    <div className={`description theme-${this.props.theme}`}>
      <h1>Shop From Our Store</h1>
      <h2>Find the biggest DEALS and Bundles</h2>
      <p>From videos,toys,accesories,outfits,and even machines. We hunt down the best deals from everywhere and bring it straight to you here. Go Nutts ;)</p>
      <p className="read-more">
        <NavLink to="/store" className="x-link">Shop Now!</NavLink>
      </p>
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
  {toggle_drp_dwn}

  )(Ad4App);








