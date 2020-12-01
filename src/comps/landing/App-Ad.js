import React from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'


class AD4App extends React.Component{
  constructor(props){
    super(props)
    this.state={
    }
  }


componentDidMount(){
  console.log(this.props)
}


  render(){



return (
	

	  <div className="container">
	  <div className="blog-card">
    <div className="meta">
      <div className="photo" style={{backgroundImage:`url(${this.props.make_acc_img})`}}></div>
      <ul className="details">
        <li className="author"><span>No Personal Data</span></li>
        <li className="date">Approve who can message you</li>
        <li className="tags">
         You Cant Get Band
        </li>
      </ul>
    </div>
    <div className="description">
      <h1>Make An Account</h1>
      <h2>Social yet discreet...</h2>
      <p> Post and communicate with others on the in-app blog, send someone a "squirt" to let them know you want a 1 on 1(face time or message).of course they will have to accept it first.</p>
      <p className="read-more">
        <a href="#">See More</a>
      </p>
    </div>
  </div>
  <div className="blog-card alt">
    <div className="meta">
      <div className="photo" style={{backgroundImage:`url(${this.props.store_img})`}}></div>
      <ul className="details">
        <li className="author"><a href="#">Best Quality And Prices</a></li>
        <li className="date">Whole Sales</li>
        <li className="tags">
         Affiliated with other shops to keep the best price knowledge
        </li>
      </ul>
    </div>
    <div className="description">
      <h1>Shop From Our Store</h1>
      <h2>Find the biggest DEALS and Bundles</h2>
      <p>From videos,toys,accesories,outfits,and even machines. We hunt down the best deals from everywhere and bring it straight to you here. Go Nutts ;)</p>
      <p className="read-more">
        <a href="#">See More</a>
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
  {}

  )(AD4App);








