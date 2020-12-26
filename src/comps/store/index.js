import React from 'react';
import {connect} from 'react-redux'
import '../../util/styles/css/quote.css';
import '../../util/styles/css/radio.css';
import '../../util/styles/css/shop-card-sm.css';
import '../../util/styles/css/shop-card-bg.css';
import '../../util/styles/sass/search.scss';
import '../../util/styles/sass/merch.scss';
import Quotes from '../quotes/'
import R4dios from './Radios'
import Search from './Search'
import Merch from './Merch'

class Store extends React.Component {
    constructor(props){
      super(props)
        this.state={
          banner:this.props.top3_banner[Math.floor(Math.random() * 3)]
        }

    }


    render(){

  return (
    <div className={`theme-${this.props.theme}`}>
      <Quotes msg="Choose your price Range and Catagory, then browse through the amazing deals we find active now." avitar={this.props.dudePic} quotesImage={this.props.quotesImage} quotesNImage={this.props.quotesNImage} />
      <div className="pr-2 mb-8">
      <R4dios
       title="Price Range"
       choices={["$200 and up", "$100 - $200", "$50 - $100", "$50 and under"]}

       />
      <R4dios
       title="Catagory"
       choices={["Toys", "Outfits", "Funiture", "Accessories"]}

       />
      </div>
      <div className="pr-2 mb-4">
      <Search/>
      </div>
      <Merch/>
<div className="fixed-bg bg-2 ad" id="home">
    <h1><a onClick={(event)=>{return window.setUtmSource(event, this)}} href={this.state.banner.url} border="0"><img border="0" src={this.state.banner.img} alt="Pornhub Header"/></a></h1>
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
  )(Store)